
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../../ui/pages/App.jsx';
import OperatorBoard from '../../ui/pages/OperatorBoard.jsx';
import OfflinePage from '../../ui/pages/OfflinePage.jsx';
const Demo = (props)=>{
    return (
        <h1> {props} </h1>
        )

}
const MeravTal = (props)=>{
    return (
        <h1>Go Merav go Tal</h1>
        )

}
export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/operator" component={OperatorBoard}/>
            <Route path="/offlineBoard" component={Demo}/>
            <Route path="/adminBoard" component={MeravTal}/>
        </Route>
    </Router>
);