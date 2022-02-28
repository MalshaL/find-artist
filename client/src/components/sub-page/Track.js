import React from "react";
import {Col, Row} from "antd";


export default class Track extends React.Component {
    render() {
        return(
            <Row>
                <Col>
                    <img className="track-art" alt="track-art"/>
                </Col>
                <Col>
                    <p>Track name</p>
                    <p>Album</p>
                </Col>
                <Col>
                    <p>Duration</p>
                </Col>
            </Row>
        )
    }
}