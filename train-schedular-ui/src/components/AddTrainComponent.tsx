import React from 'react'
import {Button, Container, Form, Row, Table} from 'react-bootstrap';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment, {Moment} from 'moment';
import axios from 'axios';



interface IAddTrainComponent {
    trainName: string;
    startingStation: string;
    destinationStation: string;
    arrivalTime: Moment;
    departureTime: Moment;
    duration: Moment;
    showTrainSchedule: boolean;

}


class AddTrainComponent extends React.Component<{sendData:any}, IAddTrainComponent> {
    constructor(props: any) {
        super(props);
        this.state = this.initialState();
    }

    initialState = () => {
        return (
            {
                trainName: "",
                startingStation: "",
                destinationStation: "",
                arrivalTime: moment().hour(0).minute(0).second(0),
                departureTime: moment().hour(0).minute(0).second(0),
                duration: moment().hour(0).minute(0).second(0),
                showTrainSchedule: false
            }
        );
    }

    resetFormBuilder = () => {
        return this.setState(this.initialState());
    }

    onSubmit = async () => {
        console.log("inside", this.state)
        console.log("test-------", this.state.trainName);
        let trainObj = {
            "trainName": this.state.trainName,
            "startingStation": this.state.startingStation,
            "destinationStation": this.state.destinationStation,
            "departureTime": this.state.departureTime,
            "arrivalTime": this.state.arrivalTime,
            "duration": this.state.duration
        }
        console.log("obj-------", trainObj);

        await axios.post('http://localhost:8080/trains', trainObj)
            .then((response) => {
                this.resetFormBuilder();
                this.props.sendData(this.state.showTrainSchedule);

            }, (error) => {
                console.log(error);
            });

    };

    handleValueChange = (value: Moment, key: any) => {
        this.setState({
            [key]: value
        } as Pick<IAddTrainComponent, keyof IAddTrainComponent>);

    };

    render() {

        return (
            <div>
                <Container>
                    <Form>
                        <Table striped bordered hover>
                            <tbody>
                            <tr>
                                {/*<Form.Group controlId="formBasicEmail">*/}
                                <td>
                                    <Form.Label>Train Name</Form.Label>
                                </td>
                                <td>
                                    <Form.Control type="text" placeholder="Enter train Name"
                                                  value={this.state.trainName}
                                                  onChange={e => this.setState({trainName: e.target.value})}
                                    />
                                </td>
                                {/*</Form.Group>*/}
                            </tr>
                            <tr>
                                {/*<Form.Group controlId="formBasicPassword">*/}
                                <td>
                                    <Form.Label>Starting Station</Form.Label>
                                </td>
                                <td>
                                    <Form.Control type="text" placeholder="Enter starting station"
                                                  value={this.state.startingStation}
                                                  onChange={e => this.setState({startingStation: e.target.value})}
                                    />
                                </td>
                                {/*</Form.Group>*/}
                            </tr>
                            <tr>
                                <td>
                                    <Form.Label>Destination Station</Form.Label>
                                </td>
                                <td>
                                    <Form.Control type="text" placeholder="Enter destination station"
                                                  value={this.state.destinationStation}
                                                  onChange={e => this.setState({destinationStation: e.target.value})}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Form.Label>Departure Time</Form.Label>
                                </td>
                                <td>
                                    <TimePicker value={this.state.departureTime}
                                                onChange={e => this.handleValueChange(e, 'departureTime')}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Form.Label>Arrival Time</Form.Label>
                                </td>
                                <td>
                                    <TimePicker value={this.state.arrivalTime}
                                                onChange={e => this.handleValueChange(e, 'arrivalTime')}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Form.Label>Duration</Form.Label>
                                </td>
                                <td>
                                    <TimePicker value={this.state.duration}
                                                onChange={e => this.handleValueChange(e, 'duration')}/>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Form>
                    <Row>

                        <Button variant="primary"
                                type="submit"
                                onClick={this.onSubmit}
                        >
                            Submit
                        </Button>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default AddTrainComponent;