import React from 'react';
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import {Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import "../Booking/createUserStyles.css"
import axios from "axios";
import BusSeatArrangement from "../Bus/BusSeatArrangement";

class BookingDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            show: false,
            reloaded: false,
            showSeatArrangement : false,
            id:'',
            from : '',
            to : '',
            bus : '',
            day : '',
            arrival : '',
            departure:'',
            price : ''

        };
    }

    onReserveSeatActions = () => {
        this.setState({
            showSeatArrangement : true
        })
    }

    componentDidMount() {

        let id = this.props.match.params.id;
        let date = this.props.match.params.date;
        axios({
            method: 'get',
            url: 'http://localhost:8081/api/v1/timeSlots/getById/'+id,

        }).then(res => {

            console.log(res.data);
            this.setState({
                id:res.data.id,
                from : res.data.from,
                to : res.data.to,
                bus : res.data.busRegNumber,
                day : res.data.day,
                arrival : res.data.arrivalTime,
                departure:res.data.leaveTime,
                price : res.data.price
            })


        }).catch(err => {
            console.log('error'.err);
        });

        axios({
            method: 'get',
            url: 'http://localhost:8081/api/v1/travels/get/'+id+'/'+date,

        }).then(res=>{
            console.log(res);
        })
    }

    render() {

        return (
            <div className="div-back" align="center" >
                {this.state.isLoading && <LoadingScreen/>}

                <div align="center" >
                    <Form className="main_form" >

                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="">Travel ID</Label>
                                    <Input type="text" name="id" value={this.state.id} disabled={true} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="">Day</Label>
                                    <Input type="text" name="day" value={this.state.day} disabled={true} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="">Bus Number</Label>
                                    <Input type="text" name="bus" value={this.state.bus} disabled={true} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="">From</Label>
                                    <Input type="text" name="from" value={this.state.from} disabled={true} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="">To</Label>
                                    <Input type="text" name="to" value={this.state.to} disabled={true} />
                                </FormGroup>
                            </Col>

                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="">Arrival</Label>
                                    <Input type="text" name="arrival" value={this.state.arrival} disabled={true} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="">Departure</Label>
                                    <Input type="departure" name="to" value={this.state.departure} disabled={true} />
                                </FormGroup>
                            </Col>

                        </Row>
                        <Row form>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="">Ticket Price</Label>
                                    <Input type="text" name="price" value={this.state.price} disabled={true} />
                                </FormGroup>
                            </Col>


                        </Row>
                        <Button size="lg" block color="primary" onClick={this.onReserveSeatActions}>Reserve Seats</Button>
                    </Form>
                </div>

                <div style={{backgroundColor:'white',margin:'auto'}}>
                    {this.state.showSeatArrangement && (
                <BusSeatArrangement/>
                    )}
                </div>
            </div>
        );
    }

}

export default BookingDetails;
