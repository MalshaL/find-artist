import React from "react";
import {Col, Row} from "antd";
import bgImage from "../../images/background.jpg";


export default class ArtistBio extends React.Component {
    render() {
        return (
            <>
                {this.props.artist ?
                    <Row>
                        <Col>
                            <img className="artist-img" src={this.props.artist.images.length ?
                                this.props.artist.images[0].url : bgImage} alt={"Artist"}/>
                        </Col>
                        <Col>
                            <p><b>Genres: </b>genres</p>
                            <p><b>Followers: </b>150</p>
                        </Col>
                    </Row> : <></>}
            </>
        )
    }
}