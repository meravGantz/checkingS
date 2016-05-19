import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {renderRoutes} from '../imports/startup/client/routes.jsx';
import '../imports/api/lists/methods';
import '../imports/api/todos/methods';
Meteor.startup(()=>{
  render(renderRoutes(), document.getElementById('root-react'));
});