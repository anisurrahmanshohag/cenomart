import React from 'react';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import '../index.css';

const Exclusive = () => {

    return (
        <>
            <div className="free_shiping">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="serv_all d-flex">
                                <div className="icn">
                                    <LocalShippingOutlinedIcon className="icn_stl" />
                                </div>
                                <div className="Ebox">
                                    <h3>Free Shipping</h3>
                                    <p>Free shipping on all US order or order above $100",</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="serv_all d-flex">
                                <div className="icn">
                                    <HistoryOutlinedIcon className="icn_stl" />
                                </div>
                                <div className="Ebox">
                                    <h3>30 DAYS RETURN</h3>
                                    <p>Free shipping on all US order or order above $100",</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="serv_all d-flex">
                                <div className="icn">
                                    <AccountBalanceWalletOutlinedIcon className="icn_stl" />
                                </div>
                                <div className="Ebox">
                                    <h3>100% PAYMENT SECURE</h3>
                                    <p>Free shipping on all US order or order above $100",</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="serv_all d-flex">
                                <div className="icn">
                                    <LocalShippingOutlinedIcon className="icn_stl" />
                                </div>
                                <div className="Ebox">
                                    <h3>Free Shipping</h3>
                                    <p>Free shipping on all US order or order above $100",</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Exclusive;

