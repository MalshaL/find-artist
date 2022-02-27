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
                    <p><b>Genres: </b>genres</p>
                    <p><b>Followers: </b>150</p>
                </Col>
            </Row>
        )
    }
}