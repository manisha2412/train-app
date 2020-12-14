import React from 'react'
import 'rc-time-picker/assets/index.css';
import AddTrainComponent from "./AddTrainComponent";
import DisplayTrainSchedule from "./DisplayTrainSchedule";
import {Button} from "react-bootstrap";
import '../css/Home.css'

interface IHome {
    showComponent: false,
}


class Home extends React.Component<IHome> {
    state = {
        showComponent: false,
    }

    _onButtonClick = () => {
        this.setState({
            showComponent: true,
        });
    }

    getData=(data:any) =>{
        this.setState({showComponent: data});
    }



    render() {
        return (
            <div>
                <div className="heading">Add Train Schedule</div>
                <AddTrainComponent sendData={this.getData}/>

                <div className="showTrainContainer">
                    <div className="heading">Show all Trains</div>
                    <div className="showTrainSection"><Button className="showTrainBtn" onClick={this._onButtonClick}>Show
                        Trains</Button>
                    </div>

                    {this.state.showComponent ?
                        <DisplayTrainSchedule showComponent={this.state.showComponent}/> :
                        null
                    }
                </div>

            </div>
        )
    }

}

export default Home;