import {Col, Row} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import React from "react";
import axios from "axios";
import {getAccessToken} from "../SpotifyConnect";


export default class SearchBar extends React.Component {

    searchTerm = "";

    getSearchResult = (searchTerm) => {
        let token = getAccessToken();
        axios.get('/api/getArtists', {
            headers: {
                token: token,
                searchTerm: searchTerm
            }
        })
            .then(response => {
                console.log(response);
                this.props.resultCallback(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleInputChange = (event) => {
        let value = event.target.value.trim();
        console.log(value);
        this.searchTerm = value;
        this.getSearchResult(this.searchTerm);
    }

    render() {
        return (
            <Row>
                <Col flex="auto">
                    <input className="artist-search" placeholder="Search Artists" onChange={this.handleInputChange}/>
                </Col>
                <Col flex="none">
                    <button className="search-button" type="submit"><SearchOutlined/></button>
                </Col>
            </Row>
        )
    }
}
