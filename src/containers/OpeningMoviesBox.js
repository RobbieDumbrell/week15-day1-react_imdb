import React, {Component} from 'react';
import MoviesList from '../components/MoviesList';

class OpeningMoviesBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {title: 'Sausage Party'},
                {title: 'Cafe Society'},
                {title: 'Morgan'},
                {title: 'The 9th Life of Louie Drax'},
                {title: 'Naam Hai Akira'},
                {title: 'Equity'},
                {title: 'Things to Come'}
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>UK Opening This Week</h1>
                <MoviesList movies={this.state.movies}/>
                <h4>See more openings this week</h4>
                <h2>Get Showtimes</h2>
            </div>
        )
    }

}

export default OpeningMoviesBox;