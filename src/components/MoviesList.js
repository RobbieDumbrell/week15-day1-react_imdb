import React, {Component} from 'react';
import Movie from './Movie';

class MoviesList extends Component {

    render() {
        const movieObjects = this.props.movies.map((movie, index) => {
            return (
                <Movie title={movie.title} key={index} />
            )
        });

        return (
            <div>
                {movieObjects}
            </div>
        )
    }

}

export default MoviesList;