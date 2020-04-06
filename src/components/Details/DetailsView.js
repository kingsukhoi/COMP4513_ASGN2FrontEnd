import React from "react";
import DetailsStub from './DetailsStub'
import { Rate, Tag } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import {addFavorite} from '../../services/helper'

function DetailsView(props) {

    const addToFavorite = () => {
        addFavorite(props.id);
        props.newFav(props);
    }
    const imdbLink = `https://www.imdb.com/title/${props.imdb}`
    const tmdbLink =`https://www.themoviedb.org/movie/${props.tmdb}`
    const posterLink = "https://image.tmdb.org/t/p/w500/";
    const rating = Math.ceil(props.rating*2)/2;
    const date = new Date(props.release);
    const earnings = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.revenue);
    return (
        <div className="columns ">

            <div className="column is-two-fifths">
                <div className="card-image">
                    <figure className="image is-2by3">
                        <img src={posterLink + props.poster} alt="Poster"/>
                    </figure>
                </div>
            </div>

            <div className="column container">
                <div>
                    <h1 className="title">{props.title} ({date.getFullYear()})  <Rate allowHalf count={10} disabled value={rating} /></h1>
                    <h3 className="subtitle">{props.tagline}</h3>
                    <div className="tile is-pulled-right">
                        <p class="subtitle is-5 is-pulled-right">Details</p>
                        <div className="content is-pulled-right">
                            <p>Total Revenue: {earnings}</p>
                            <p>Released on: {date.toDateString()}</p>
                            <div className="tile is-pulled-right">
                                <Tag color="#F5DE50"> <a href={imdbLink}>IMDb</a></Tag>
                                <Tag color="#2db7f5"><a href={tmdbLink}>TMDB</a></Tag>
                                <HeartTwoTone stlye={{float:'right'}} twoToneColor="#eb2f96" onClick={addToFavorite} />
                            </div>
                        </div>
                        </div>
                        
                        <p class="subtitle is-5">Overview</p>
                        <div className="tile">{props.details.overview}</div>
                            
                </div>
                    <div className="columns">
                        <DetailsStub title="Countries" data={props.countries}/>
                        <DetailsStub title="Companies" data={props.companies}/>
                        <DetailsStub title="Genres" data={props.details.genres}/>
                    </div>
                        <DetailsStub title="Keywords" data={props.details.keywords}/> 
                </div>
        </div>


    )
}
export default DetailsView;