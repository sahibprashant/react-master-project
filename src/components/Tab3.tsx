import React from 'react'
import { Helmet } from 'react-helmet-async'
import '../styles/Tab3.css';

export default function Tab3() {

    return (
        <div className="tab3--parent">
            <Helmet>
                <title>Blogs</title>
                <meta name = "description" content='page related cotent'/>
                <link rel='canonical' href='/tab3' />
            </Helmet>
            <h1>Blogs..</h1>
        </div>
    )
}