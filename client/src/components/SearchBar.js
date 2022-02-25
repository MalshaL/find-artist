import {Col, Row} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import React from "react";
import axios from "axios";


export default class SearchBar extends React.Component {
    searchTerm = "";
    state = { searchResult: []};

    handleInputChange = (event) => {
        let value = event.target.value.trim();
        if (value !== "") {
            this.searchTerm = value;
            console.log(this.searchTerm);
            const searchResult = getSearchResult(this.searchTerm);
            console.log('state before--'+this.state);
            this.setState({searchResult});
            console.log('state--'+this.state);
        }
    }

    render() {
    return (
        <Row>
            <Col flex="auto">
                <input className="artist-search" placeholder="Search Artists" onChange={this.handleInputChange}/>
            </Col>
            <Col flex="none">
                <button className="search-button" type="submit"><SearchOutlined /></button>
            </Col>
        </Row>
        )
    }
}


function getSearchResult(searchTerm) {
    axios.get('http://localhost:5000/api/access-token')
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}