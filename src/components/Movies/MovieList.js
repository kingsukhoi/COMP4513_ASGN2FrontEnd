import React from 'react';
import SingleMovie from "./SingleMovie";
import '../../style/Shrink.css'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import movieFlex from './movieFlex.module.css'
import { PageHeader, Button } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

class MovieList extends React.Component {
    state = { selected:"title", reverse:true };

    sortValue = (e) => {
        //Default sort by title
        let sortOrder = this.props.sortTitle;

        //See what was selected. If ratings or year sort by that algorithm
        const selected = e.currentTarget.value;
        if( selected === "year") {
            sortOrder = this.props.sortYear;
        } else if( selected === "rating") {
            sortOrder = this.props.sortRating;
        }
        //Set the reverse order to (the current selected and the opposite of the previous revresal choice)
        const reverse = (this.state.selected === selected) && !this.state.reverse;

        //Sort the movie list based on chosen sort method (title, year, or rating) and whether or not to reverse the order
        this.props.sortMovies(sortOrder, reverse);
        this.setState( { selected: selected , reverse: reverse});
    }

    RenderMovies = () => {
        if (this.props.movies.length !== 0 || this.props.movies !== null) {
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
        const titleArrow = (this.state.selected === "title" && this.state.reverse) ? <CaretDownOutlined/> : <CaretUpOutlined/>;
        const yearArrow = (this.state.selected === "year" && this.state.reverse) ? <CaretDownOutlined/> : <CaretUpOutlined/>;
        const ratingArrow = (this.state.selected === "rating" && this.state.reverse) ? <CaretDownOutlined/> : <CaretUpOutlined/>;
        return (
            <div className="box table-container">
                <PageHeader
                    title={"Movie List"}
                    extra={[
                        <Button 
                            onClick={this.sortValue}
                            value="title"
                            type={this.state.selected === "title" ? "primary" : "default"} >
                            Title {titleArrow}</Button>,
                        <Button 
                            onClick={this.sortValue}
                            value="year" 
                            type={this.state.selected === "year" ? "primary" : "default"} >
                            Year {yearArrow}</Button>,
                        <Button 
                            onClick={this.sortValue}
                            value="rating" 
                            type={this.state.selected === "rating" ? "primary" : "default"} >
                          Rating{ratingArrow}
                        </Button>,
                      ]}

                >

                </PageHeader>
                <div className={movieFlex.containerFlex} >
                    <this.RenderMovies />

                </div>
            </div>
        )
    }
}

export default MovieList;