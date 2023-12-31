

import Navbar from './Navbar';
import Home from './Home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Create from './Create';
import Blogdetails from './Blogdetails';
import PageNotFound from './PageNotFound';

function App() {
    return (
    <Router>
      <div className="App">
      <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/create">
              <Create></Create>
            </Route>
            <Route exact path="/blogs/:id">
              <Blogdetails></Blogdetails>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
