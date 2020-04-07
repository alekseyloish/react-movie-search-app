import React, { Component } from 'react';

class Card extends Component {
    render() {
        const data = this.props.data;

        let posterUrl = 'https://image.tmdb.org/t/p/w500' + data.poster;

        if ( data.poster === null || data.poster === undefined ) {
            posterUrl = 'https://via.placeholder.com/340x480?text=Image+Not+Found';
        }

        return (
            <div className="card-wrapper">
                <p>Data card</p>
                <h2>Title: {data.title}</h2>
                <div>
                    Poster:
                    <br/>
                    <img src={posterUrl} alt=""/>
                </div>
            </div>
        )
    }
}

export default Card;