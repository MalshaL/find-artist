import React from "react";
import {Col, Row} from "antd";
import bgImage from "../../images/background.jpg";


export default class ArtistBio extends React.Component {
    render() {
        return (
            <>
                {this.props.artist ?
                    <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>
                        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                            <img className="artist-img" src={this.props.artist.images.length ?
                                this.props.artist.images[0].url : bgImage} alt={"Artist"}/>
                        </Col>
                        <Col xs={16} sm={16} md={16} lg={16} xl={16} className="artist-bio">
                            {this.props.artist.genres.length ?
                                <p><b>Genre: </b>{this.props.artist.genres[0]}</p> :
                                <></>
                            }
                            <p><b>Followers: </b>{this.props.artist.followers.total}</p>
                            <a className="artist-link" href={this.props.artist.external_urls.spotify}
                               target='_blank' rel="noreferrer">VIEW ON SPOTIFY</a>
                        </Col>
                    </Row> : <></>}
            </>
        )
    }
}