import React, { Component } from "react";
import axios from 'axios';

export default class EmployeeDetail extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            lastName: "",
            firstName: "",
            emailId: "",
        };
    }
    
    componentDidMount() {
        axios
            .get("http://localhost:9090/api/v1/employees/" + this.props.match.params.id)
            .then((res) => {
                console.log(res)
                this.setState({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    emailId: res.data.emailId,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    
    


    
    render() {
        return (
            <div class="mt-3 container d-flex flex-column justify-content-center align-items-center">
            <div class="card">
                <div class="card-header">
                    <h2>Employee Details</h2>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Full Name: {this.state.firstName} {this.state.lastName}</h5>
                    <p class="card-text">Employee Email ID: {this.state.emailId}  </p>
                    <a href="/" class="btn btn-primary">Go Back</a>
                </div>
                </div>
            </div>

            

        )
    }
}
