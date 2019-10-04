import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import axios from 'axios';
import avatar from "assets/img/faces/marc.jpg";
import HistoryTable from "../../components/HistoryTable/HistoryTable";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};



class UserProfile extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            showUpdate : false,
            user : null
        }

    }

    componentDidMount() {
        this.getUser();
    }
    componentWillMount() {
        this.getUser();
    }

    showUpdateProfile = () => {

        this.setState({
            showUpdate : !this.state.showUpdate
        });
    }

    getUser = () => {
        const jwt = localStorage.getItem('csse_we_32');
        if (!jwt) {
            this.setState({
                user: null
            });
            return;
        }

        axios({
            method: 'post',
            url: 'http://localhost:8081/api/v1/users/getUserByToken',
            header:{
                authorization : 'Bearer ' + jwt,
            },
            data: {
                "jwttoken": jwt.toString(),
            }

        }).then(res => {
            console.log(res.data)
            this.setState({
                user: res.data,
                isLoggedIn: true
            });

        }).catch(err => {
            console.log(err)
            window.location.replace('/login');

        })
    }




    render() {

        let historyTableColumns =[
            { title: 'Date/Time', field: 'date' },
            { title: 'From', field: 'from' },
            { title: 'To', field: 'to' },
            { title: 'Bus Number', field: 'bus' },
            { title: 'Price', field: 'price', type: 'numeric' },
            {title: 'Buttons',field:'btn',render : rowData => <input type="button" value={'Button'}/>}
        ];
        let historyTableData = [
            { date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price:'Rs.452.30' },
            { date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price:'Rs.452.30' },
            { date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price:'Rs.452.30' },
            { date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price:'Rs.452.30' },
            { date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price:'Rs.452.30' },
            { date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price:'Rs.452.30' },
            { date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price:'Rs.452.30' },
            { date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price:'Rs.452.30' },
            { date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price:'Rs.452.30' },
            { date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price:'Rs.452.30' },
            { date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price:'Rs.452.30' },
            { date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price:'Rs.452.30' },

        ];


    return (
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
                {this.state.showUpdate && (
              <Card>
                <CardHeader color="primary">
                  <h2>Edit Profile</h2>
                  <p>Complete your profile</p>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                          labelText="Full Name"
                          id="fullName"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                              value : this.state.user.userFullName,
                          }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                          labelText="Username"
                          id="username"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                              value : this.state.user.username,
                          }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                          labelText="Email address"
                          id="email"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                              value : this.state.user.email,
                          }}
                      />
                    </GridItem>
                  </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={5}>
                            <CustomInput
                                labelText="National ID Card Number"
                                id="nic"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    value : this.state.user.nic,
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <CustomInput
                                labelText="Contact Number"
                                id="contact"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    value : this.state.user.contactNo,
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <CustomInput
                                labelText="Type"
                                id="type"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    value : 'Passenger',
                                }}
                            />
                        </GridItem>
                    </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                          labelText="Card Number"
                          id="creditCardNo"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                              value : this.state.user.creditCardNo,
                          }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                          labelText="Expire Date"
                          id="expire"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                              value : this.state.user.expireDate,
                          }}
                      />
                    </GridItem>

                  </GridContainer>

                </CardBody>
                <CardFooter>
                  <Button color="primary">Update Profile</Button>
                </CardFooter>
              </Card>
                )}
                <Card>
                    <CardBody>
                        <HistoryTable columns={historyTableColumns} data={historyTableData}/>
                    </CardBody>
                </Card>

            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={avatar} alt="ABC" />
                  </a>
                </CardAvatar>
                <CardBody profile>
                  <h6 >CEO / CO-FOUNDER</h6>
                  <h2 >{ this.state.user != null && this.state.user.userFullName}</h2>

                  <Button color="primary" round onClick={()=>{
                    this.showUpdateProfile();
                  }}>
                    Update Profile
                  </Button>
                </CardBody>
              </Card>
                <Card profile>
                    <CardBody profile>
                        <h2 >Account Balance</h2>
                        <h1 style={{color:"red",fontStyle:"strong"}} >Rs.256.00</h1>
                        <Button color="primary" round onClick={()=>{
                            this.showUpdateProfile();
                        }}>
                            Recharge Account
                        </Button>
                    </CardBody>
                </Card>
            </GridItem>
          </GridContainer>
        </div>
    );
  }
}

export default UserProfile;

// export default function UserProfile() {
//   const classes = useStyles();
//
// }
