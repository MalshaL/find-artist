import './App.css';
import 'antd/dist/antd.css';
import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";


export default class App extends React.Component {
    state = {accessToken: ''};

    render() {
        return (
            <div className="app">
                <Header/>
                <HomePage/>
            </div>
        )
    }
}

