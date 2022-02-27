import './App.css';
import 'antd/dist/antd.css';
import React from "react";
import HomePage from "./components/HomePage";
import SubPage from "./components/sub-page/SubPage";
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';


export default class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Router>
                    <Routes>
                        <Route path="/" exact element={<HomePage/>}/>
                        <Route path="/artist/:id" element={<SubPage/>}/>
                    </Routes>
                </Router>
            </div>
        )
    }
}
