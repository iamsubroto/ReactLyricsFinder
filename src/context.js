import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'SEARCH_TRACKS': 
            return {
                ...state,
                track_list: action.payloads,
                heading: 'Search Results'
            }
        default:
            return state;
    }
}
export class Provider extends Component {

    componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=IN&f_has_lyrics=1&apikey=a9b4676ddff9c534ddf33d071f2a7c46`)
    .then(res => {
        // console.log(res.data);
        this.setState({track_list: res.data.message.body.track_list});
    })
    .catch(err => console.log(err))
    }
    state = {
        heading: 'Top 10 Tracks',
        dispatch: action => this.setState(state => reducer(state, action))
    }
  render() {
    return (
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
    )
  }
}


export const Consumer = Context.Consumer;