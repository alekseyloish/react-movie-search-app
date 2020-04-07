import React, { Component } from 'react';
import SearchPanel from './Search';
import Card from './Card';

class App extends Component {
    state = {
        movieId: 522627
    }

    render() {
        return (
            <div>
                <SearchPanel />
                <Card data={this.state} />
            </div>
        )
    }

    fetchApi = url => {
        fetch(url)
            .then( (res) => res.json() )
            .then( (data) => {
                this.setState({
                    movieId: data.id,
                    title: data.original_title,
                    poster: data.poster_path,
                });
            }); // end fetch()
    } // end fetchApi

    componentDidMount() {
        let url = `https://api.themoviedb.org/3/movie/${this.state.movieId}?&api_key=847f9f445ee1850d971d8db179b7e3ac`;
        this.fetchApi(url);
    }
}

export default App;