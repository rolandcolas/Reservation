import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserHome.css'; // Assuming CSS for styling

function UserHome() {
    return (
        <div className="user-home">
            <nav>
                <ul>
                    <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/reserve" activeClassName="active">Reserve</NavLink></li>
                    <li><NavLink to="/sanctions" activeClassName="active">Sanctions</NavLink></li>
                    <li><NavLink to="/logout" activeClassName="active">Logout</NavLink></li>
                </ul>
            </nav>
            <div className="content">
                <h1>USER HOME PAGE</h1>
                <p>NO RESERVATIONS YET</p>
            </div>
        </div>
    );
}

export default UserHome;
