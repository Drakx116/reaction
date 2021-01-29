import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bulma/css/bulma.css';
import Dashboard from "./pages/Dashboard";

const App = () => {
    return (
        <div className="container">
            <Router>
                <div className="navbar">
                    <Link to={'/'} className="nav-link"> Dashboard </Link>
                </div>
                <Switch>
                    <Route unique path="/" component={ Dashboard } />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
