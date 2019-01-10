import React, { Component } from 'react';
import CreateDictionaries from '../Dictionaries/CreateDictionaries';
import AddDictionaries from '../Dictionaries/AddDictionaries';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <Router>
                <div className="Header">

                    <nav>
                        <div className="container">
                            <div className="nav-wrapper">
                                <Link to="/" className="brand-logo">Manage Dictionary</Link>
                                <ul id="nav-mobile" className="right hide-on-med-and-down">
                                    {/* <li><Link to="/">Create Dictionary</Link></li> */}
                                    <li><Link to="/AddDictionaries/">Dictionaries' List</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* <Route path="/" exact component={Ninjas} /> */}
                    <Route path="/" exact component={CreateDictionaries} />
                     
                    <Route path="/AddDictionaries/" component={AddDictionaries} />

                </div>
            </Router>
        );
    }
}

export default Header;