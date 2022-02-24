import logo from "../logo.svg";
import '../App.css';
import React from "react";
import {Card} from 'antd';


function ArtistCard() {
    const {Meta} = Card;
    return (
        <Card hoverable cover={<img src={logo} alt={logo}/>}>
            <Meta title="artist name" description="desc"/>
        </Card>
            // <header className="App-header">
            //     <img src={logo} className="App-logo" alt="logo" />
            //     <p>
            //         Edit <code>src/App.js</code> and save to reload.
            //     </p>
            //     <a
            //         className="App-link"
            //         href="https://reactjs.org"
            //         target="_blank"
            //         rel="noopener noreferrer"
            //     >
            //         Learn React
            //     </a>
            // </header>
        )
}

export default ArtistCard;