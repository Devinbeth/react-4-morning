import React from 'react';

export default function ThirdRoute(props) {
    console.log(props);
    return (
        <div>
            <h1>Details Route</h1>
            You clicked on {props.match.params.foodItem}
        </div>
    )
}
