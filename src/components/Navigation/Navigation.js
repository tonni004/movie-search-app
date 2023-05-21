import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (

        <div className="bg-black bg-opacity-75">
            <ul className="nav d-flex justify-content-center nav-underline container p-2">
                <li className="nav-item">
                    <NavLink to="/"
                        className="nav-link link-body-emphasis text-light"
                        activeclassname="active"
                    >Home</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/movies"
                        className="nav-link link-body-emphasis text-light"
                        activeclassname="active"
                    >Movies</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/trends"
                        className="nav-link link-body-emphasis text-light"
                        activeclassname="active"
                    >Trends</NavLink>
                </li>
            </ul>
        </div>

    )
}

export default Navigation;