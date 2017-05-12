import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  as Router, Route } from 'react-router-dom';
import store from './logic/store';
import {Provider} from 'react-redux';

import NavbarBs from './react/Navbar';
import Home from './react/Home';
import Kittens from './react/Kittens';

const App = () => (
    <Provider store={store}>
        <Router>
            <div>
                <NavbarBs className="ct-navbar-container"/>
                <Route path="/" />
                <Route path="/home" component={Home} />
                <Route path="/kittens" component={Kittens} />
            </div>
        </Router>
    </Provider>
);

// Rendering
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
