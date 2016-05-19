
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../../ui/pages/App.jsx';
import MsgContainer from '../../ui/containers/MsgContainer.jsx';
const Demo = (props)=>{
    return (
        <h1>Jonathan replace it</h1>
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
            <Route path="/operator" component={MsgContainer}/>
            <Route path="/offlineBoard" component={Demo}/>
            <Route path="/adminBoard" component={MeravTal}/>
        </Route>
    </Router>
);