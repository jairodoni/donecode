import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../src/pages/Home';
import PageNotFound from '../src/pages/PageNotFound';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}