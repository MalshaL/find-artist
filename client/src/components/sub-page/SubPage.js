import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {Col, Row} from "antd";
import SubPageHeader from "./SubPageHeader";
import ArtistBio from "./ArtistBio";
import TrackList from "./TrackList";
import TrackGraph from "./TrackGraph";


export default function SubPage() {

    let params = useParams();
    useEffect(() => {
        console.log(params);
    }, []);

    return (
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