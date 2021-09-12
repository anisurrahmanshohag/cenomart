import React from 'react';


const Banner = () => {


    return (
        <>
            <div id="banner_part">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="banner_text">
                                <h1>The best free stock photos & videos</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button className="cbtn">Shop now</button>
                            </div>
                        </div>
                        <div className="col-lg-7 my-5">
                            <div className="banner_pic">
                                <img className="img-fluid w-100" src="images/Bannerimg1.png" alt="Banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Banner;
