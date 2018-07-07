import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import OtherPage from './OtherPage';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/otherpage" component={OtherPage} />
    </Switch>
  </main>
);

export default Routes;
