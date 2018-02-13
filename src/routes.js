import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FirstRoute from './components/FirstRoute.js';
import SecondRoute from './components/SecondRoute.js';
import ThirdRoute from './components/ThirdRoute.js';

export default (
    <Switch>
        <Route path='/' component={FirstRoute} exact />
        <Route path='/second' component={SecondRoute} />
        <Route path='/third' component={ThirdRoute} />
    </Switch>
);