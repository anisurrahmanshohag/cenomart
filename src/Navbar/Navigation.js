import { NavLink } from "react-router-dom";
import React from 'react';

const Navigation = () => {

    return (
        <>
            <ul className="d-flex menu_btn justify-content-lg-between w-100">
                <li><NavLink exact to="/" activeClassName="nav_active">Home</NavLink></li>
                <li><NavLink exact to="/" activeClassName="nav_active">About</NavLink></li>
                <li><NavLink exact to="/" activeClassName="nav_active">Services</NavLink></li>
                <li><NavLink exact to="/" activeClassName="nav_active">Contact</NavLink></li>
                <li><NavLink exact to="/" activeClassName="nav_active">Help</NavLink></li>
            </ul>
        </>
    )
}
export default Navigation;
