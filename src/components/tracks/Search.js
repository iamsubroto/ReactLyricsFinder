import React, { Component } from 'react'
import { Consumer } from '../../context'
import axios from 'axios'

class Search extends Component {
    state = {
        trackTitle: ''
    }

    findTrack(dispatch, e) {
        e.preventDefault();
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=3&page=10&s_track_rating=desc&apikey=a9b4676ddff9c534ddf33d071f2a7c46`)
                .then(res => {
                    console.log("saerch result is",res.data);
                    dispatch({type:"SEARCH_TRACKS", payloads: res.data.message.body.track_list})

                    this.setState({trackTitle: ''})
                    // this.setState({
                    //     track_list: res.data.message.body.track_list
                    // });
                })
                .catch(err => console.log(err))
    }
    onChange = (e) => {
        this.setState({trackTitle: e.target.value});
    } 
  render() {
    return (
        <Consumer>
            { value => {
                const { dispatch } = value;
                return (
                    <div className="card card-body mb-4 p-4">
                        <h1 className="display-4 text-center">
                            <i className="fas fa-music"></i> Search For A Song
                        </h1>
                        <p className="lead text-center">Get the lyrics for any song</p>
                        <form onSubmit={this.findTrack.bind(this, dispatch)}>
                            <div className="form-group">
                                <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                placeholder="Song Title...." 
                                name="trackTitle" 
                                value={this.state.trackTitle} 
                                onChange={this.onChange}
                                />
                            </div>
                            <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">Get Track Lyrics</button>
                        </form>
                    </div>
                )
            }}
        </Consumer>
    )
  }
}


export default  Search;