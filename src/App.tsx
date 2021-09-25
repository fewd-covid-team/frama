import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header';
import TraitorsScreen from './traitors';
import TipsScreen from './tips';
import StatsScreen from './stats';
import Footer from './footer';

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
