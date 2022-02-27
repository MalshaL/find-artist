import React, {useState} from "react";
import {useParams, useLocation} from "react-router-dom";
import {Col, Row} from "antd";
import SubPageHeader from "./SubPageHeader";
import ArtistBio from "./ArtistBio";
import TrackList from "./TrackList";
import TrackGraph from "./TrackGraph";
import {token} from "../../SpotifyConnect";
import axios from "axios";


export default function SubPage() {
    const [storedToken] = useState(token);
    const [tracksResult, setResult] = useState(null);

    let params = useParams();
    const name = params.name;
    const id = useQuery().get('id');
    console.log(name);
    console.log(id);
    getArtistTracks(id, storedToken, setResult);

    return (
        <div>
            <SubPageHeader name={name}/>
            <ArtistBio data={tracksResult}/>
            <Row>
                <Col>
                    <TrackList data={tracksResult}/>
                </Col>
                <Col>
                    <TrackGraph data={tracksResult}/>
                </Col>
            </Row>
        </div>
    )
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

// get top tracks for selected artist
function getArtistTracks(id, storedToken, setResult) {
    axios.get('http://localhost:5000/api/getArtistTracks', {
        headers: {
            token: storedToken,
            id: id
        }
    })
        .then(response => {
            console.log(response);
            setResult(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}