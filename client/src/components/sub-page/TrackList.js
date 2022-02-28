import React from "react";
import Track from "./Track";


export default class TrackList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: ''};
    }

    setSelectedTrack = (id) => {
        this.setState({selected: id});
        this.props.getSelectedTrack(id);
    }

    render() {
        return (
            <div>
                {this.props.tracks.map((track, index) =>
                    <Track key={index} track={track} selectedId={this.state.selected} getSelectedTrack={this.setSelectedTrack}/>)}
            </div>
        )
    }
}