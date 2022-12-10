import React from 'react'
import { useParams, useLocation } from "react-router-dom";
import placeholderimg from '../assets/placeholder_img.jpg';
import Default from './common/Default';

export default function BlogDetails(props: any) {
    // console.log(useParams(), useLocation().state);
    let postId = useParams().id;
    let blogData: any;
    blogData = useLocation().state;

    return (
        <Default>
            <div className='root--blog-details'>
                <div className='blog-details-box'>
                    <img className='blog-details-img' src={blogData.image ? blogData.image : placeholderimg} />
                    <h1 className='blog-details-title'>{blogData.title}</h1>
                    <p className='blog-details-content'>{blogData.details.substring(0, 275).replace("<p>", "").replace("</p>", "") + "..."}</p>
                    <div className='blog-meta'>
                        {`${blogData.readingTime}, ${blogData.view}`}
                    </div>
                </div>
            </div>
        </Default>
    );
}
