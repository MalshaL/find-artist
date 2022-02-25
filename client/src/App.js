import './App.css';
import 'antd/dist/antd.css';
import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoadingScreen from "./components/LoadingScreen";
import axios from "axios";


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {accessToken: ''};
    }

    getAccessToken = () => {
        axios.get('http://localhost:5000/api/access-token')
            .then(response => {
                this.setState({accessToken: response.data.access_token});
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getAccessToken();
    }

    render() {
        return (
            <div className="app">
                <Header/>
                {this.state.accessToken ?
                    <HomePage/> :
                    <LoadingScreen/>
                }
            </div>
        )
    }
}
