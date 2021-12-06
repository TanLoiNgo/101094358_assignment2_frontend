import React, { Component } from "react";
import axios from 'axios';

export default class AddEmployee extends Component {
    
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const employee = {
            lastName: e.target.elements.firstName.value,
            firstName: e.target.elements.lastName.value,
            emailId: e.target.elements.emailId.value
        };
        axios
            .post("http://localhost:9090/api/v1/employees", employee)
            .then((res) => console.log(res.data)); 

    }

    render() {
        return (
          <div class="container d-flex flex-column justify-content-center align-items-center">
            <h3 class="text-center">Add Employee</h3>
            <form onSubmit={this.onSubmit}>
              <div class="mb-3">
                <label class="form-label">First Name: </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  required
                />
              </div>
              <div class="mb-3">
                <label>Last Name: </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  required
                />
              </div>
              <div class="mb-3">
                <label>Email: </label>
                <input
                  type="email"
                  className="form-control"
                  name="emailId"
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Create Employee"
                  className="btn btn-primary"
                />
                <a href="/" class="btn bg-danger mx-2 text-white">Cancel</a>
              </div>
            </form>
      </div>
        )
    }
}
