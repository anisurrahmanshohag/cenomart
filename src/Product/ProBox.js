import React from 'react';


export const ProBox = (prop) => {

    return (
        <div className="probox">
            <div className="product_img">
                <img className='img-fluid w-100' src={prop.productImage} alt="Product" />
                <button className="q_view">Quick View</button>
                <button className="n_shop">Shop now</button>
            </div>
            <div className="pro_text">
                <h5>{prop.productName}</h5>
                <p>{prop.productPrice}</p>
            </div>
        </div>
    )
}
