import './App.css';
import 'antd/dist/antd.css';
import React from "react";
import HomePage from "./components/HomePage";
import SubPage from "./components/sub-page/SubPage";
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';


export default class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Router>
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/artist/:name" component={SubPage}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
