import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminHome.css'; // Assuming CSS for styling

function AdminHome() {
    return (
        <div className="admin-home">
            <nav>
                <ul>
                    <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/sanctions" activeClassName="active">Sanctions</NavLink></li>
                    <li><NavLink to="/logout" activeClassName="active">Logout</NavLink></li>
                </ul>
            </nav>
            <div className="content">
                <h1>ADMIN HOME PAGE</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Student ID</th>
                            <th>Reservation Type</th>
                            <th>Date and Time</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Rows will be dynamically generated here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminHome;
