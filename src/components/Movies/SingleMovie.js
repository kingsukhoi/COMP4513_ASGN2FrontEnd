import React from 'react';
import {Link, navigate} from "gatsby";
import { HeartOutlined } from '@ant-design/icons'
import { addFavorite } from '../../services/helper'
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faHeart} from '@fortawesome/free-solid-svg-icons';
// import {FavoriteContext} from "../../Context/FavoriteContex";

class SingleMovie extends React.Component {

    constructor(props) {
        super(props)
    }

    posterLink = "https://image.tmdb.org/t/p/w154/";

    onFavsClick = (e) => {
        addFavorite(this.props.id);
    };

    render() {
        return (
            <tr>
                <td>
                    <figure className="image is-fullwidth">
                        <img className="tableImage" src={this.posterLink + this.props.imageUrl} alt="Poster"
                             aria-label="close"/>
                    </figure>
                </td>
                {/* <td><Link to={"app/details?id=" + this.props.id} path={this.props.id}>{this.props.title}</Link></td> */}
                <td>{this.props.releaseDate}</td>
                <td>{this.props.rating}</td>
                <td className="">
                    <button onClick={this.onFavsClick} className="button is-1">
                    <HeartOutlined />
                    </button>
                    <button onClick={()=>{navigate(`/app/details/?id=${this.props.id}`)}} className="button is-1"
                          style={{margin: "0"}}>View</button>
                </td>
            </tr>

        )
    }
}

// SingleMovie.contextType = FavoriteContext;


export default SingleMovie;