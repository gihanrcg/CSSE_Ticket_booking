import React from "react";
import "../../assets/css/SignUpStyles.css";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.js";
import axios from "axios";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            reloaded: false
        };
    }

    onSubmitHandler = e => {
        e.preventDefault();

        this.setState({
            isLoading: true
        });

        console.log(this.state);
        axios({
            method: 'post',
            url: 'http://localhost:8081/api/v1/users/passenger',
            data:
                {
                    "username": this.state.username,
                    "password": this.state.password,
                    "email": this.state.email,
                    "creditCardNo": '',
                    "nic": this.state.nic,
                    "contactNo": this.state.mobile,
                    "userType": "ADMIN",
                    "profileImg": ''
                }

        }).then(res => {

            console.log(res);
            localStorage.setItem('csse_we_32', res.data.token);

        }).catch(err => {
            console.log('error'.err);
        }).finally(x => {
            this.setState({
                isLoading: false,
                email: '',
                password: ''
            })

        });
    };

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <div>
                {this.state.isLoading && <LoadingScreen/>}

                <div className="signup-form">
                    <form onSubmit={this.onSubmitHandler}>
                        <h2>Sign Up</h2>
                        <p>Please fill in this form to create an account!</p>
                        <hr/>
                        <div className="form-group">
                            <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-user"/>
                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Username"
                                    required="required"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-paper-plane"/>
                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email Address"
                                    required="required"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-mobile"/>
                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="mobile"
                                    placeholder="Mobile Number"
                                    required="required"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-id-card"/>
                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nic"
                                    placeholder="NIC"
                                    required="required"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-lock"/>
                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    required="required"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-lock"/>
                  <i className="fa fa-check"/>
                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="confirm_password"
                                    placeholder="Confirm Password"
                                    required="required"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="checkbox-inline">
                                <input type="checkbox" required="required"/> I accept the{" "}
                                <a href="google.com">Terms of Use</a> &amp;{" "}
                                <a href="google.com">Privacy Policy</a>
                            </label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-lg">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        Already have an account? <a href="google.com">Login here</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
