import React from 'react';
import * as _ from "lodash";
import MovieFilter from './MovieFilter/';
import MovieList from './MovieList';
import { getToken, logout } from '../../services/auth'
import Layout from '../Layout/Layout';
import { getSearchParam } from '../../services/helper'

// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faCaretLeft, faCaretRight, faSync} from "@fortawesome/free-solid-svg-icons";

export const defaultQueryParams = {
    title: "",
    minRating: 0,
    maxRating: 10
};

export const queryOptions = {
    allMovies: "http://localhost:8080/api/brief", //"http://localhost:8080/api/movies",
    brief: "http://localhost:8080/api/brief",
    title: "http://localhost:8080/api/find/title/", //Just add :substring
    findYear: "http://localhost:8080/api/find/year/", //just add :low, and :high
    findRating: "http://localhost:8080/api/find/rating/", //just add :low, and :high
    singleMovies: "http://localhost:8080/api/movies/" //just add :id
};

class Movies extends React.Component {

    constructor(props) {
        super(props);
        const searchParams = _.cloneDeep(defaultQueryParams);
        searchParams.title = getSearchParam("title");

        this.state = {
            movies: [],
            searchParams: searchParams,
            isLoading: true,
            movieFilterExpand: true
        }
    }
    


    async getMovies(url) {
        const token = getToken().token;
        const authUrl = `${url}?auth_token=${token}`
        console.log(authUrl);
        try{
            const request = await fetch(authUrl);   
            let parsedMovies = await request.json();
            parsedMovies.map(x => {
                x.release_date = new Date(x.release_date);
                return x;
            });
            return parsedMovies = parsedMovies.sort((a, b) => (a.title > b.title) - (a.title < b.title));
        }
        catch{
            console.error("aaaaa");
            //logout();
        }
        return false;
    }

    async componentDidMount() {
        const newState = await _.cloneDeep(this.state); 
        
        let parsedMovies = await this.getMovies(queryOptions.allMovies);
        newState.movies = parsedMovies;
            
        newState.isLoading = false;
        this.setState(newState);
    }

    filterOnQuery = (query) => {
        let results = this.getMovies(query);
        results.then( (val) => {
            this.setState({movies: val});
        });
        console.log("After");

    };
    toggleClose = (e) => {
        this.setState({...this.state, movieFilterExpand: !this.state.movieFilterExpand})
    };

    generateStyle() {
        return this.state.movieFilterExpand ? null : {marginLeft: "1em"}
    }

    render() {
        return (
            <React.Fragment>
                <Layout>
                <div className="columns">
                    {this.state.movieFilterExpand ? <MovieFilter
                        updateQuery={this.updateQuery}
                        searchParams={this.state.searchParams}
                        onSearch={this.filterOnQuery}
                    /> : null}

                    <div className="findme" onClick={this.toggleClose} style={this.generateStyle()}>
                        {/* <FontAwesomeIcon icon={this.state.movieFilterExpand ? faCaretLeft : faCaretRight}
                                         className="fa-2x" style={{height: "55vh"}}/> */}
                    </div>
                    <div className="column has-text-centered">
                        {this.state.isLoading ? <div>Loading</div> :
                            //<FontAwesomeIcon icon={faSync} className="fa-spin fa-10x"/>
                            <MovieList movies={this.state.movies}/>

                        }

                    </div>
                </div>
                </Layout>
            </React.Fragment>
        )
    }
}

export default Movies;