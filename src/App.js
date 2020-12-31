import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            {/*Search page */}
            <SearchPage />
          </Route>
          <Route path="/">
            {/*Home page */}
            <Home />
          </Route>
        </Switch>

        <Footer />
        {/* Home */}
        {/* Header */}

        {/* Banner */}
        {/* Search */}
        {/* Cards */}

        {/* Footer */}
        {/* Search Page */}
        {/*... */}
      </Router>

    </div>
  );
}

export default App;
