import React from 'react'

export default function Square(props: any) {
    const style = {
        background: "lightblue",
        border: "2px solid darkblue",
        fontSize: "30px",
        fontWeight: "800",
        cursor: "pointer",
        outline: "none",
    };

    return (
        <button style={style} onClick={props.onClick}>{props.value}</button>
    )
}
