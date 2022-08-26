import React from 'react'
import {Link} from 'react-router-dom'
import './Tab2.css'

export default function Tab2() {
    return (
        <div className="tab2--parent">
            <h1>This is Tab2.</h1>
            <Link to = "/tab3">Goto Tab3</Link>
        </div>
    )
}