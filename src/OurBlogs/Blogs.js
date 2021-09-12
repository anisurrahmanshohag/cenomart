import React from 'react';
import '../index.css';

export const Blogs = (props) => {

    return (
        <>
            <div className="blogCell">
                <div className="blog_img">
                    <img className="img-fluid w-100" src={props.BlgImage} alt="Blogimg" />
                </div>
                <div className="blog_text">
                    <h3>{props.BlgHead}</h3>
                    <h4>{props.BlgDate}</h4>
                    <p>{props.BlgText}</p>
                </div>
            </div>
        </>
    )
}
