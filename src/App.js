
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home';
import LogIn from './Login/LogIn';
import Register from './Register/Register';



const App = () => {

    return (
        <Switch>
            <Route exact path="/" render={Home} />
            <Route exact path="/login" render={LogIn} />
            <Route exact path="/signup" render={Register} />
        </Switch>
    )
};

export default App;
