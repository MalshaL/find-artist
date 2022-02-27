import {Col, Row} from "antd";
import React from "react";


function Header() {
    const appName = "Find your favourite artists"
    return (
        <Row className="app-header">
            <Col flex="auto">
                <h1 className="app-title">{appName}</h1>
            </Col>
            <Col flex="none" className="spotify-icon-box">
                <img className="spotify-icon" src={require('../images/Spotify_Icon.png')} alt="Spotify Icon"/>
            </Col>
        </Row>
    )
}

export default Header;