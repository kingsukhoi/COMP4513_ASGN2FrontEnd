import React from 'react';
import SingleMovie from "./SingleMovie";
import '../../style/Table.css'
import '../../style/Shrink.css'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import movieFlex from './movieFlex.module.css'

class MovieList extends React.Component {
    RenderMovies = () => {
        if (this.props.movies.length !== 0) {
            return (
               
                <TransitionGroup className="Movies">
                    {this.props.movies.map((x) => {
                        return (
                            <CSSTransition key={this.props.id} enter exit mountOnEnter unmountOnExit timeout={1501}
                                           classNames="singleMovie">
                                <SingleMovie
                                    addFavorite={this.props.addFavorite}
                                    remove={this.props.remove}
                                    key={x.id}
                            id={x.id}
                            title={x.title}
                            releaseDate={x.release_date.getFullYear().toString()}
                            rating={x.ratings.average}
                            imageUrl={x.poster}
                            show={true}
                        />
                        </CSSTransition>  
                    )
                    
                })}
                </TransitionGroup>
        )
    }
        return (
            <tbody><TransitionGroup className="Movies"><tr><td/><td/><td>No Matches</td><td/><td/></tr></TransitionGroup></tbody>
        )
    };

    render() {
        return (
            <div className="box table-container">
                <h1 className="title">Movie List</h1>
                <div className={movieFlex.containerFlex} >
                    <this.RenderMovies />

                </div>
            </div>
        )
    }
}

export default MovieList;