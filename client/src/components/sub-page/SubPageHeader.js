import React from "react";
import {Col, Row} from "antd";

export default class SubPageHeader extends React.Component {
    render() {
        return (
            <Row className="app-header">
                <Col flex="auto" className="page-title">
                    <h1>Home</h1>
                    <h1> &#8249; </h1>
                    <h1>Artist Name</h1>
                </Col>
                <Col flex="none" className="spotify-icon-box">
                    <img className="spotify-icon" src={require('../images/Spotify_Icon.png')} alt="Spotify Icon"/>
                </Col>
            </Row>
        )
    }
}