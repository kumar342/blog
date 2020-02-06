import React from 'react';
import "./style.css";

export default function Card(props) {
    return (
        <div className="Card">
            {props.children}

        </div>
    )
}
