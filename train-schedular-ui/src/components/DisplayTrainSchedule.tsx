import React from 'react'
import 'rc-time-picker/assets/index.css';
import axios from "axios";
import {Table} from 'react-bootstrap';
import '../css/Home.css'


interface IDisplayTrainSchedule {
    trainData: any;
    showTrainData: boolean;
    showComponent: boolean;
}

const Row = (props: any) => (
    <tr>
        <td> {props.data.trainName}</td>
        <td>{props.data.startingStation}</td>
        <td>{props.data.destinationStation}</td>
        <td>{props.data.departureTime}</td>
        <td>{props.data.arrivalTime}</td>
        <td>{props.data.duration}</td>
    </tr>
)

class DisplayTrainSchedule extends React.Component<{showComponent:true},IDisplayTrainSchedule> {


    constructor(props: any) {
        super(props);
        this.state = this.initialState();
    }

    initialState = () => {
        return (
            {
                trainData: [],
                showTrainData: true,
                showComponent: false

            }
        );
    }


    async componentDidMount() {
        console.log("showComponent-----",this.state.showComponent)
        const response = await axios.get('http://localhost:8080/trains');
        this.setState({trainData: response.data === [] ? null : response.data})
        console.log(JSON.stringify(this.state.trainData))
    }

    render() {

        return (
            <div>
                {this.state.showTrainData ?
                    <div className= "addTrainContainer">
                        {this.state.trainData !== null ?
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Train Name</th>
                                    <th>Starting Station</th>
                                    <th>Destination Station</th>
                                    <th>Departure Time</th>
                                    <th>Arrival Time</th>
                                    <th>Duration</th>
                                </tr>
                                </thead>
                                <tbody>

                                {this.state.trainData.map((x: any, i: any) => <Row key={i} data={x}/>)}
                                </tbody>
                            </Table>
                            :
                            <div className="heading">No Trains Found.</div>
                        }
                    </div>
                    :
                    <div className="spinner-grow text-primary"></div>
                }
            </div>
        )
    }

}

export default DisplayTrainSchedule;