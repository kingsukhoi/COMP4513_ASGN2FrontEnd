import React from "react";
import {addFavorite} from '../../services/helper'
import { Tag } from 'antd'


function DetailsView(props) {
    
    function RenderCountries() {
        if(props.contries !== null) { 
        return props.countries.map(x => {
            return <Tag key={x.iso_3166_1} >{x.name}</Tag>
        })} else {
            return <Tag >No Countries</Tag>
        }
    }

    function RenderCompanies() {
        if(props.companies !== null) { 
            return props.companies.map(x => {
                console.log(x);
                return <Tag key={x.id} >{x.name}</Tag>
            })
        }else {
            return <span className="tag">No Companies</span>
        }
    }

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

                        <div className="columns">
                            <div className="column">
                                <div className="">Countries</div>
                                <div className="tags">
                                    {RenderCountries()}
                                </div>
                            </div>

                            <div className="column">
                                <div className="">Companies</div>
                                <div className="tags">
                                    {RenderCompanies()}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


    )
}
export default DetailsView;