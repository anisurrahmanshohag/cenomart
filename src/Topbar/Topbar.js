import React from 'react';
import '../index.css';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import { NavLink } from 'react-router-dom';

const Topbar = () => {

    return (
        <>
            <div className="top_bar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="info d-flex">
                                <p><PhoneOutlinedIcon fontSize="small" /><span>Phone:</span>+123505541058</p>
                                <p><EmailOutlinedIcon fontSize="small" /><span>Email</span>info@email.com</p>
                            </div>
                        </div>
                        <div className="col-lg-6 text-end">
                            <div className="logsign">
                                <NavLink exact to="/login" activeClassName="act_log" className="cbtn">Log in</NavLink>
                                <NavLink exact to="/signup" activeClassName='act_log' className="cbtn">Sign up</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Topbar;
