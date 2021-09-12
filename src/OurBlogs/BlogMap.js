import React from 'react';
import { BlogData } from '../SectionHead/HeadingData';
import { Blogs } from './Blogs';

const BlogMap = () => {

    return (
        <>
            <div id="Blog_part">
                <div className="container">
                    <div className="row">
                        {
                            BlogData.map((elm, idx) => {
                                const { blImage, blHead, blDate, blText } = elm;
                                return (
                                    <div className="col-lg-4">
                                        <Blogs
                                            BlgImage={blImage}
                                            BlgHead={blHead}
                                            BlgDate={blDate}
                                            BlgText={blText}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
};
export default BlogMap;
