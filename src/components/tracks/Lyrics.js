import React, { Component } from 'react'
import axios from 'axios'
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom'

class Lyrics extends Component {
    state = {
        track: {},
        lyrics: {}
    }
    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=a9b4676ddff9c534ddf33d071f2a7c46`)
            .then(res => {
                console.log(res.data);
                    this.setState({
                        lyrics: res.data.message.body.lyrics
                    });
            return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=a9b4676ddff9c534ddf33d071f2a7c46`)
            })
            .then(res => this.setState({
                track: res.data.message.body.track
            }))
            .catch(err => console.log(err))
        }
  render() {
      const { track, lyrics } = this.state;
      if(track === undefined || 
        lyrics === undefined ||
        Object.keys(track).length === 0 || 
        Object.keys(lyrics).length === 0) {
            return <Spinner />
        } else {
            return (
                <React.Fragment>
                    <Link to="/" className="btn btn-sm btn-dark mb-4">Go Back</Link>
                    <div className="card">
                        <h5 className="card-header">
                            {track.track_name} by {' '} <span className="text-secondary">{track.artist_name}</span>
                        </h5>
                        <div className="card-body">
                            <p className="card-text">{lyrics.lyrics_body}</p>
                        </div>
                    </div>
                    <ul className="list-group mt-3">
                        <li className="list-group-item">
                            <strong>Album Id:</strong> {track.album_id}
                        </li>
                        <li className="list-group-item">
                            <strong>Album Name</strong> {track.album_name}
                        </li>
                        <li className="list-group-item">
                            <strong>Track Rating:</strong> {track.track_rating}
                        </li>                                                
                    </ul>
                </React.Fragment>
            )
        }
  }
}

export default Lyrics;
