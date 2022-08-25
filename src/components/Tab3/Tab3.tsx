import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Tab3() {
    return (
        <div>
            <Helmet>
                <title>Tab3</title>
                <meta name = "description" content='page related cotent'/>
                <link rel='canonical' href='/tab3' />
            </Helmet>
            <h1>This is Tab3.</h1>
        </div>
    )
}