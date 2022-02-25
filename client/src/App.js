import './App.css';
import 'antd/dist/antd.css';
import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoadingScreen from "./components/LoadingScreen";


export default class App extends React.Component {
    state = {accessToken: ''};

    render() {
        return (
            <div className="app">
                <Header/>
                {this.state.accessToken ? <HomePage/> : <LoadingScreen/>}
            </div>
        )
    }
}

