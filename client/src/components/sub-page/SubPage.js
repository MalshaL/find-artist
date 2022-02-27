import React from "react";
import {Col, Row} from "antd";
import SubPageHeader from "./SubPageHeader";
import ArtistBio from "./ArtistBio";
import TrackList from "./TrackList";
import TrackGraph from "./TrackGraph";


export default class SubPage extends React.Component {
    render() {
        return(
            <div>
                <SubPageHeader/>
                <ArtistBio/>
                <Row>
                    <Col>
                        <TrackList/>
                    </Col>
                    <Col>
                        <TrackGraph/>
                    </Col>
                </Row>
            </div>
        )
    }
}