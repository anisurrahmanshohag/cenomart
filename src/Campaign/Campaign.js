import React from 'react';
import '../index.css';


const Campaign = () => {

    return (
        <>
            <div id="campaign_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="campaign_img">
                                <img className="img-fluid w-100" src="images/Campaignimg.png" alt="Campaign" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="cmp_box d-flex flex-column justify-content-between h-100">
                                <div className="cmp">
                                    <img className='img-fluid w-100' src="images/Cmp1.png" alt="cmp" />
                                    <button>Accessories</button>
                                </div>
                                <div className="cmp">
                                    <img className='img-fluid w-100' src="images/Footwear.png" alt="cmp" />
                                    <button>Footwear</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="cmp_box h-100">
                                <div className="cmp">
                                    <img className='img-fluid w-100' src="images/Watch.png" alt="cmp" />
                                    <button>Watches</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Campaign;
