import React from 'react';
import * as _ from "lodash";
import MovieFilter from './MovieFilter/';
import MovieList from './MovieList';
import { logout, makeAuthUrl } from '../../services/auth'
import { getSearchParam, queryOptions } from '../../services/helper'
import Layout from '../Layout/Layout';
import { CaretLeftOutlined, CaretRightOutlined, LoadingOutlined } from '@ant-design/icons'
import "react-bulma-components/dist/react-bulma-components.min.css"
export const defaultQueryParams = {
    title: "",
    minRating: 0,
    maxRating: 10
};
class Movies extends React.Component {

    constructor(props) {
        super(props);
        const searchParams = _.cloneDeep(defaultQueryParams);
        searchParams.title = getSearchParam("title");
        this.clearFav = this.clearFav.bind(this);
        this.state = {
            movies: [],
            searchParams: searchParams,
            isLoading: true,
            movieFilterExpand: true,
            favUpdate: null
        }
    }


    newFav = (newFav) => {
        this.setState({favUpdate: newFav});
      };
     
    clearFav = () => {
        this.setState({favUpdate: null});
      };


    async getMovies(url) {
        const authUrl = makeAuthUrl(url);
        try {
            const request = await fetch(authUrl);
            let parsedMovies = await request.json();
            parsedMovies.map(x => {
                x.release_date = new Date(x.release_date);
                return x;
            });
            return parsedMovies = parsedMovies.sort(this.sortTitle);
        }
        catch{
            console.error("aaaaa");
            //logout();
        }
        return false;
    }

    async componentDidMount() {
        const newState = await _.cloneDeep(this.state);
        let url = queryOptions.brief;
        let params = this.state.searchParams.title;
        if (params !== "") {
            url = `${queryOptions.title}${params}`
        }
        let parsedMovies = await this.getMovies(url);
        newState.movies = parsedMovies;

        newState.isLoading = false;
        this.setState(newState);
    }

    //Method to be called by the movie list. 
    //This method takes a sorting function and a boolean on whether the list should be reversed
    sortMovies = (sortBy, reverse) => {
        const sortedMovies = [...this.state.movies];
        sortedMovies.sort(sortBy);
        if (reverse) {
            sortedMovies.reverse();
        }
        this.setState({ movies: sortedMovies });
    }

    //A set of sorting functions used by the movie list
    // Either, sort by title, year, or rating
    sortTitle(a, b) {
        var nameA = a.title.toUpperCase();
        var nameB = b.title.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0
    }
    sortYear(a, b) {
        var yearA = a.release_date;
        var yearB = b.release_date;
        if (yearA < yearB) {
            return -1;
        }
        if (yearA > yearB) {
            return 1;
        }
        return 0
    }
    sortRating(a, b) {
        var ratingA = a.ratings.average;
        var ratingB = b.ratings.average;
        if (ratingA < ratingB) {
            return -1;
        }
        if (ratingA > ratingB) {
            return 1;
        }
        return 0
    }


    filterOnQuery = (query) => {
        let results = this.getMovies(query);
        results.then((val) => {
            this.setState({ movies: val });
        });
    };
    toggleClose = (e) => {
        this.setState({ ...this.state, movieFilterExpand: !this.state.movieFilterExpand })
    };

    generateStyle() {
        return this.state.movieFilterExpand ? null : { marginLeft: "1em" }
    }

    render() {
        const arrowStyle = {paddingTop: "30vh", height: "55vh", fontSize: "24px"};
        let arrow = this.state.movieFilterExpand ? <CaretLeftOutlined style={arrowStyle}/> : <CaretRightOutlined style={arrowStyle}/>;
        return (
            <React.Fragment>
                <Layout favUpdate={this.state.favUpdate} clearFav={this.clearFav}>
                    <div className="columns">
                        {this.state.movieFilterExpand ? <MovieFilter
                            updateQuery={this.updateQuery}
                            searchParams={this.state.searchParams}
                            onSearch={this.filterOnQuery}
                        /> : null}

                        <div className="findme is-vcentered" onClick={this.toggleClose} style={this.generateStyle()}>
                            {arrow}
                        </div>
                        <div className="column has-text-centered">
                            {this.state.isLoading ? <LoadingOutlined /> :
                                <MovieList
                                    movies={this.state.movies}
                                    sortTitle={this.sortTitle}
                                    sortYear={this.sortYear}
                                    sortRating={this.sortRating}
                                    sortMovies={this.sortMovies}
                                    newFav={this.newFav}
                                />
                            }
                        </div>
                    </div>
                </Layout>
            </React.Fragment>
        )
    }
}

export default Movies;