import '../App.css';
import React from "react";
import bgImage from '../images/background.jpg';
import {Link} from "react-router-dom";


export default class ArtistCard extends React.Component {

    render() {
        const pageLink = "/artist/"+this.props.artist.id;
        return (
            <Link to={pageLink}>
            <div className="artist-card">
                <img className="artist-card-img" src={this.props.artist.images.length ?
                    this.props.artist.images[0].url : bgImage} alt={"Artist"}/>
                <div className="artist-card-desc">
                    <h4 className="artist-card-name">{this.props.artist.name}</h4>
                    <p className="artist-card-pop">{this.props.artist.popularity ? "Popularity: " + this.props.artist.popularity : ""}</p>
                </div>
            </div>
            </Link>
        )
    }
}
