import "./App.sass";
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"

import Home from "./components/pages/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import MembershipBenefit from "./components/pages/MembershipCard/MembershipBenefit";
function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/membershipcard" component={MembershipBenefit} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
