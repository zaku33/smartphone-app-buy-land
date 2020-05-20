import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident'
import Project from './pages/Project'
import NewProject from './pages/NewProject'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/project" component={Project} />
        <Route path="/incidents/new" component={NewIncident} />
        <Route path="/create/project" component={NewProject} />
      </Switch>
    </BrowserRouter>
  );
}