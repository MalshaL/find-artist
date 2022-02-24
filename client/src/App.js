import './App.css';
import 'antd/dist/antd.css';
import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CardContainer from "./components/ArtistContainer";


export default class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Header/>
                <SearchBar/>
                <CardContainer/>
            </div>
        )
    }
}

