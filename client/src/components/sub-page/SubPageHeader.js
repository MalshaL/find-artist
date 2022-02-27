import React from "react";
import {Link} from "react-router-dom";
import {Col, Row} from "antd";

export default class SubPageHeader extends React.Component {

    render() {
        return (
            <Row className="app-header">
                <Col flex="auto" className="page-title">
                    <h1><Link to="/">Home</Link> &#8249; {this.props.name}</h1>
                </Col>
                <Col flex="none" className="spotify-icon-box">
                    <img className="spotify-icon" src={require('../../images/Spotify_Icon.png')} alt="Spotify Icon"/>
                </Col>
            </Row>
        )
    }
}