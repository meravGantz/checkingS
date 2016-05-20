
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../../ui/pages/App.jsx';
import {MessageBox} from '../../ui/components/messageBox.jsx'
import landingPage from '../../ui/pages/landingPage.jsx'
import OperatorBoard from '../../ui/pages/OperatorBoard.jsx';
import OfflinePage from '../../ui/pages/OfflinePage.jsx';
import MsgContainer from '../../ui/containers/msgContainer.jsx';
import AutomaticQuestionsContainer from '../../ui/containers/AutomaticQuestionsContainer.jsx';
import processesContainer from '../../ui/containers/processesContainer.jsx'
const Demo = (props)=>{
    return (
        <h1> </h1>
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
            <Route path="/landingPage" component={landingPage}/>
            <Route path="/operator" component={OperatorBoard}/>
            <Route path="/offlineBoard" component={OfflinePage}/>
            <Route path="/adminBoard" component={AutomaticQuestionsContainer}/>
            <Route path="/MessageBox" component={MessageBox}/>
            <Route path="/yontemp" component={processesContainer}/>
        </Route>
    </Router>
);