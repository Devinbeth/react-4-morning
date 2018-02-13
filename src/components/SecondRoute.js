import React from 'react';
import { Link, Route } from 'react-router-dom';
import Sub1 from './Sub1.js';

export default function SecondRoute() {
    return (
        <div>
            <h2>Second Route!!!</h2>
            <Link to='/second/sub1'>SUB ROUTE</Link>
            <Route path='/second/sub1' component={Sub1} exact />
        </div>
    );
}
