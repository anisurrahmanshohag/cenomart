import React, { useState } from 'react';
import '../index.css';
import { ProBox } from './ProBox';
import { ProData } from './ProductData';

const Products = () => {
    const [NoItms, setNoItms] = useState(8);

    const slice = ProData.slice(0, NoItms);
    return (
        <>
            <div id="product_part" className="pt-4">
                <div className="container">
                    <div className="row">
                        {
                            slice.map((ele, ind) => {
                                return (
                                    <div className="col-lg-3">
                                        <ProBox
                                            key={ind}
                                            id={ind}
                                            productImage={ele.productImg}
                                            productName={ele.proText}
                                            productPrice={ele.price}
                                        />
                                    </div>
                                )
                            })
                        }
                        <div className="col-lg-3 m-auto text-center">
                            <button className="cbtn load_btn" onClick={(() => {
                                setNoItms(NoItms + 4)
                            })}>Load more</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Products;
