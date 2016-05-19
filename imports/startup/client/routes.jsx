
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../../ui/pages/App.jsx';
// route components
import TodosContainer from '../../ui/containers/TodosContainer.jsx';
import ListContainer from '../../ui/containers/ListContainer.jsx';
import CreateListPage from '../../ui/pages/CreateListPage.jsx';
const demoInside = (props)=>{
  return(
      <div>
          Hello {props.params.id}
      </div>
  )
};

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/lists/create" component={CreateListPage}/>
            <Route path="/lists/:listId" component={ListContainer}/>
        </Route>
    </Router>
);