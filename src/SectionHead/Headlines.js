import React from 'react';
import { HeadingData } from './HeadingData';
import '../index.css';

const Headlines = (props) => {


    return (
        <>
            <div className="heading">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 m-auto text-center">
                            <h2>{props.mHead}</h2>
                            <p>{props.sHead}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


export const SecHead1 = () => {
    return <Headlines
        mHead={HeadingData[0].mHead}
        sHead={HeadingData[0].sHead}
    />
}
export const SecHead2 = () => {
    return <Headlines
        mHead={HeadingData[1].mHead}
        sHead={HeadingData[1].sHead}
    />
}
export const SecHead3 = () => {
    return <Headlines
        mHead={HeadingData[2].mHead}
        sHead={HeadingData[2].sHead}
    />
}