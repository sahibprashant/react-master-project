import React from 'react'
import placeholder from '../assets/placeholder_img.jpg'

export default function BlogsCard(props: any) {
    return (
        <div className='blog-card'>
            <img className='blog-img' src={props.data.image ? props.data.image : placeholder} />
            <div className='blog-data-background'>
                <h2 className="blog-title">{props.data.title}</h2>
                <p className="desc-short">{props.data.details.substring(0, 275).replace("<p>", "").replace("</p>", "") + "..."}</p>
            </div>
            <div className='blog-card-meta'>
                {`${props.data.readingTime}, ${props.data.view}`}
            </div>
        </div>
    );
}
