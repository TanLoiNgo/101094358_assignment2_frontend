import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ViewEmployee from './ViewEmployee';
import AddEmployee from './AddEmployee';
import UpdateEmployee from './UpdateEmployee'
import EmployeeDetail from './EmployeeDetail';
function App() {
  return (
    <Router>
      <div className="App container d-flex justify-content-center align-items-center">
        <ul class="nav my-4">
          <li class="nav-item m-2">
            <a class="nav-link" class="btn btn-dark" href="/">Home</a>
          </li>
          <li class="nav-item m-2">
            <a class="nav-link" class="btn btn-dark" href="/add-employee/_add">Add Employee</a>
          </li>
        </ul>
      </div>

      <Switch>
          <Route exact path="/" component={ViewEmployee}/>
          <Route exact path="/view-employee/:id" component={EmployeeDetail}/>
          <Route exact path="/add-employee/_add" component={AddEmployee}/>
          <Route exact path="/add-employee/:id" component={UpdateEmployee}/>
      </Switch>
    </Router>
    
  );
}

export default App;
