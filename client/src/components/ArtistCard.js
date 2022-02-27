import '../App.css';
import React from "react";
import bgImage from '../images/background.jpg';


export default class ArtistCard extends React.Component {

    render() {

        return (
            <div className="artist-card">
                <img className="artist-card-img" src={this.props.artist.images.length ?
                    this.props.artist.images[0].url : bgImage} alt={"Artist"}/>
                <div className="artist-card-desc">
                    <h4 className="artist-card-name">{this.props.artist.name}</h4>
                    <p className="artist-card-pop">{this.props.artist.popularity ? "Popularity: " + this.props.artist.popularity : ""}</p>
                </div>
            </div>
            // <header className="App-header">
            //     <img src={logo} className="App-logo" alt="logo" />
            //     <p>
            //         Edit <code>src/App.js</code> and save to reload.
            //     </p>
            //     <a
            //         className="App-link"
            //         href="https://reactjs.org"
            //         target="_blank"
            //         rel="noopener noreferrer"
            //     >
            //         Learn React
            //     </a>
            // </header>
        )
    }
}
