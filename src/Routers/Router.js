import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import index from '../Components/Home/index';
import MovieDetail from '../Components/MovieDetail/MovieDetail';

const Router = () => {
    return (
        <Router  >
            <Switch>


                <Route exact path='/Home'  >
                    <Home/>
                    </Route>
                <Route exact path='/MovieDeatil' >
                    <MovieDetail/>
                    </Route>
            </Switch>

        </Router>
    );
};


export default RouterComponent;