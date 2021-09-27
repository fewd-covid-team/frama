import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import TraitorsScreen from './pages/traitors';
import TipsScreen from './pages/tips';
import StatsScreen from './pages/stats';
import Footer from './components/footer';

function AppContent(): JSX.Element {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/traitors">
            <TraitorsScreen />
          </Route>
          <Route path="/tips">
            <TipsScreen />
          </Route>
          <Route path="/stats">
            <StatsScreen />
          </Route>
          <Route path="/">
            <TraitorsScreen />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
function App(): JSX.Element {
  return (
    <div className="App">
      <AppContent />
    </div>
  );
}

export default App;
