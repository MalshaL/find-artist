import {Col, Row} from "antd";
import React from "react";


function Header() {
    return (
        <Row className="app-header">
            <Col flex="none" className="spotify-icon-box">
                <img className="spotify-icon" src={require('../images/Spotify_Icon.png')} alt="Spotify Icon"/>
            </Col>
            <Col flex="auto">
                <h1 className="app-title">Find Artist</h1>
            </Col>
        </Row>
    )
}

export default Header;