import React from 'react';
import {getSearchParam} from "../../services/helper";
import DetailsView from './DetailsView'
import ViewTabs from './ViewTabs'
import CastView from './CastView'
import Layout from '../Layout/Layout'
import { LoadingOutlined } from '@ant-design/icons'
import { makeAuthUrl } from '../../services/auth'
import { queryOptions } from '../../services/helper'

import {cloneDeep} from "lodash";

class Details extends React.Component {

    constructor(props) {
        super(props);
        this.clearFav = this.clearFav.bind(this);
        this.castButton = this.castButton.bind(this);
        this.backToDetailsButton = this.backToDetailsButton.bind(this);
        this.state = {
            isLoading: true,
            favUpdate: null
        }

    }

    

    async componentDidMount() {
        const authUrl = makeAuthUrl(`${queryOptions.singleMovie}${getSearchParam("id")}`);
        const request = await fetch(authUrl);
        let parsedMovie = await request.json();
        console.log(parsedMovie);
        this.setState({ movie: parsedMovie[0], active: 'Details', crew: null, isLoading: false});
    }
    
    newFav = (newFav) => {
        console.log("newFav");
        this.setState({favUpdate: newFav});
      };
     
    clearFav = () => {
        this.setState({favUpdate: null});
      };


    castButton(cast_id) {
        const newState = cloneDeep(this.state);
        newState.active = 'Cast';
        newState.cast_id = cast_id;
        this.setState(newState);
    }

    backToDetailsButton() {
        this.setState({active: 'Details'});
    }
  
    render() {
         if (this.state.isLoading) {
            return (<div  className="is-text-centered fa-10x fa-spin" ><LoadingOutlined /></div>)
        } else {
            return (
                <Layout favUpdate={this.state.favUpdate} clearFav={this.clearFav}>
                <div className="View">
                    <div className="columns">
                        <div className="column is-two-thirds">
                            {this.state.active === "Details" ?
                                <DetailsView
                                    id={getSearchParam("id")} 
                                    castButton={this.castButton}
                                    title={this.state.movie.title}
                                    poster={this.state.movie.poster}
                                    production={this.state.movie.production}
                                    details={this.state.movie.details}
                                    countries={this.state.movie.production.countries}
                                    companies={this.state.movie.production.companies}
                                /> :
                                <CastView castButton={this.backToDetailsButton} cast_id={this.state.cast_id}/>}
                        </div>
                        <div className="column">
                            <ViewTabs castButton={this.castButton} cast={this.state.movie.production.cast}
                                      crew={this.state.movie.production.crew}/>
                        </div>
                    </div>
                </div>
                </Layout>
            )
        }
    }
}

export default Details;