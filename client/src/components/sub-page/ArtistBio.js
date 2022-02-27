import React from "react";
import {Col, Row} from "antd";


export default class ArtistBio extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    <img className="artist-img"/>
                </Col>
                <Col>
                    <p><bold>Genres: </bold>genres</p>
                    <p><bold>Followers: </bold>150</p>
                </Col>
            </Row>
        )
    }
}