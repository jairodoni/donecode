import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ReactGA from 'react-ga';

import Home from '../src/pages/Home';
import PageNotFound from '../src/pages/PageNotFound';

export function Routes() {
  async function initializeGAnalytics() {
    await ReactGA.initialize(`${import.meta.env.VITE_ANALYTICS_ID}`);
    await ReactGA.pageview(window.location.pathname + window.location.search);
  }

  useEffect(() => {
    initializeGAnalytics();
  }, []);

  return (
    <Router>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}