import React from 'react';
import { Link } from 'react-router-dom';

export default class FirstRoute extends React.Component {
    constructor() {
        super();
        this.state = {
            foodItems: ['apple', 'cake']
        };
    }

    render() {
        let food = this.state.foodItems.map((item, index) => {
            return (
                <Link to={`/third/${item}`} key={index}>
                    <p>{item}</p>
                </Link>
            );
        });
        return (
            <div>
                <h1>My Store</h1>
                { food }
            </div>
        );
    }
}
