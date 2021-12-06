import React, { Component } from "react";
import axios from 'axios';

export default class UpdateEmployee extends Component {
    
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            lastName: "",
            firstName: "",
            emailId: "",
        };
    }
    
    componentDidMount() {
        axios
            .get("http://localhost:9090/api/v1/employees/" + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    emailId: response.data.emailId,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onSubmit(e) {
        e.preventDefault();
        const employee = {
            lastName: e.target.elements.firstName.value,
            firstName: e.target.elements.lastName.value,
            emailId: e.target.elements.emailId.value
        };
        axios
            .put(
                "http://localhost:9090/api/v1/employees/" + this.props.match.params.id,
                employee
            ).then((res) => console.log(res.data));
            this.props.history.push("/");
    }

    render() {
        return (
                <div class="container d-flex flex-column justify-content-center align-items-center" style={{ marginTop: 20 }}>
                <h3 class="text-center">Update Employee</h3>
                <form onSubmit={this.onSubmit}>
                <div class="mb-3">
                    <label class="form-label">First Name: </label>
                    <input type="text" name="firstName" className="form-control" placeholder={this.state.firstName}
                    />
                </div>
                <div class="mb-3">
                    <label>Last Name: </label>
                    <input type="text" name="lastName" className="form-control" placeholder={this.state.lastName}
                    />
                </div>
                <div class="mb-3">
                    <label>Email: </label>
                    <input type="email" name="emailId" className="form-control" placeholder={this.state.emailId}
                    />
                </div>
                <div>
                    <input type="submit" value="Update" class="btn btn-success mx-3"/>
                    <a href="/" class="btn btn-warning">Cancel</a>
                </div>
                </form>
        </div>
        )
    }
}
