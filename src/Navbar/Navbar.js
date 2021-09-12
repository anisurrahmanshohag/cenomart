import React from 'react';
import '../index.css';
import Navigation from './Navigation';

const Navbar = () => {

    return (
        <>
            <div className="navbar_nav">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-2">
                            <div className="main_logo">
                                <img src="images/logo.png" alt="logo" />
                            </div>
                        </div>
                        <div className="col-lg-6 text-end">
                            <div className="main_menu navbar navbar-expand-lg h-100">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse">
                                    <Navigation />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Navbar;
