import React from "react";
import {Link} from 'react-router-dom';
import './Dashboard.scss';


function Dashboard(props) {

return (


<div>
    <div className="main">
    <label>Home</label>
    <label>Settings</label>
    <label>Dashboard</label>
    <label>Logout</label>
    </div>
    <h1>Hello {props.name}</h1>
    <h1>His Age is {props.age}</h1>
</div>

)
}
export default Dashboard;
