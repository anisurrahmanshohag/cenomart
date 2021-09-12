import React from 'react';
import '../index.css';


export const Collection = () => {

    return (
        <>
            <div id="collection_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="collect1">
                                <img className='img-fluid w-100' src="images/collection1.png" alt="collection" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="collect_box d-flex flex-column justify-content-between h-100">
                                <div className="collect2">
                                    <img className='img-fluid w-100' src="images/collection2.png" alt="collection" />
                                </div>
                                <div className="collect3">
                                    <img className='img-fluid w-100' src="images/collection3.png" alt="collection" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="collect4">
                                <img className='img-fluid w-100' src="images/collection4.png" alt="collection" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
