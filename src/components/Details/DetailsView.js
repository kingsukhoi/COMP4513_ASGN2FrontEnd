import React from "react";
import DetailsStub from './DetailsStub'
import {addFavorite} from '../../services/helper'

function DetailsView(props) {

    const addToFavorite = () => {
        addFavorite(props.id);
    }

    const posterLink = "https://image.tmdb.org/t/p/w500/";
    return (
        <div className="columns ">

            <div className="column is-two-fifths">
                <header className="card-header">
                    <button onClick={addToFavorite} className="card-footer-item ">Add to
                        favorites
                    </button>
                </header>
                <div className="card-image">
                    <figure className="image is-2by3">
                        <img src={posterLink + props.poster} alt="Poster"/>
                    </figure>
                </div>
            </div>

                    <div className="column">
                        <div>
                            <div className="title">{props.title}</div>
                            <div className="tile">{props.details.overview}</div>
                        </div>
                        <DetailsStub title="Countries" data={props.countries}/>
                        <DetailsStub title="Companies" data={props.companies}/>
                        <DetailsStub title="Genres" data={props.details.genres}/>
                        <DetailsStub title="Keywords" data={props.details.keywords}/>
                    </div>

                </div>


    )
}
export default DetailsView;