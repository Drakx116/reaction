import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bulma/css/bulma.css';
import Dashboard from "./pages/Dashboard";

const App = () => {
    return (
      <Router>
          <Switch>
              <Route unique path="/" component={ Dashboard } />
          </Switch>
      </Router>
    );
}

export default App;
