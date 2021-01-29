import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bulma/css/bulma.css';
import Dashboard from "./pages/Dashboard";
import Characters from "./pages/Characters";

const App = () => {
    return (
        <div className="container">
            <Router>
                <div className="navbar">
                    <Link to={'/'} className="nav-link"> Dashboard </Link>
                    <Link to={'/characters'} className="nav-link"> Characters </Link>
                </div>
                <Switch>
                    <Route exact path="/" component={ Dashboard } />
                    <Route exact path="/characters" component={ Characters } />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
