import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {renderRoutes} from '../imports/startup/client/routes.jsx';

import '../imports/api/communication/methods'
import '../imports/api/processes/methods';
import '../imports/api/questions/methods';
import '../imports/api/reports/methods';
Meteor.startup(()=>{
  render(renderRoutes(), document.getElementById('root-react'));
});