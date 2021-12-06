import React, { Component } from 'react'
import axios from 'axios';

const Employee = (props) => (
    <tr>
        <td>{props.employee.firstName.toUpperCase()}</td>
        <td>{props.employee.lastName.toUpperCase()}</td>
        <td>{props.employee.emailId}</td>
        <td>
            <a class="btn btn-info m-2" href={"/view-employee/" + props.employee.employeeId}>View</a>
            <a class="btn btn-primary m-2" href={"/add-employee/" + props.employee.employeeId}>Edit</a>
            <a class="btn btn-danger m-2" onClick={() => {props.deleteEmployee(props.employee.employeeId); }} href="/">Delete</a> 
        </td>
    </tr>
);

export default class ViewEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        };

    }
    componentDidMount() {
        axios
            .get("http://localhost:9090/api/v1/employees")
            .then((res) => {
                this.setState({ employees: res.data });
            })
            .catch(function (err) {
                console.log(err);
            });
    }
    deleteEmployee(id) {
        axios.delete("http://localhost:9090/api/v1/employees/" + id).then((response) => {
            alert("Employee Deleted")
        });
        this.setState({
            employee: this.state.employees.filter((el) => el.id !== id),
        });
        }
    employeeList() {
        return this.state.employees.map((employee) => {
            return (
                <Employee employee={employee} deleteEmployee={this.deleteEmployee} key={employee.employeeId}/>
            );
        });
    }
    render() {
        return (
            <div className="container d-flex flex-column align-items-center my-4">
                <h3 class="text-center">Home Page</h3>
                <table className="table table-striped  table-borderless my-2">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{this.employeeList()}</tbody>
                </table>
            </div>
        )
    }
}
