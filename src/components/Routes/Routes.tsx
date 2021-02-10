import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Root from '../Root/Root';
import HomePage from '../../pages/HomePage/HomePage';
import UserDetailsPage from '../../pages/UserDetailsPage/UserDetailsPage';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users/:userId" component={UserDetailsPage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;