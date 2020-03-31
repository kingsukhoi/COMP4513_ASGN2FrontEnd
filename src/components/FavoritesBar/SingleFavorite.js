import React from "react";
//import "../Style/Favorite.css"
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
// import {FavoriteContext} from "../Context/FavoriteContex";

class SingleFavorite extends React.Component {
    posterUrl = "https://image.tmdb.org/t/p/w92/";

    // state = {
    //     hovering: false
    // };

    // toggleHover = (e) => {
    //     this.setState(prevState => ({hovering: !prevState.hovering}));
    // };
    // handleRemove = (e) => {
    //     this.context.rmFavorite(this.props.favorite.id);
    // };

    render() {
        return (
            <div className="column">
                <figure className="image"
                        onMouseEnter={this.toggleHover}
                        onMouseLeave={this.toggleHover}
                >
                    {/* {this.state.hovering ? <FontAwesomeIcon onClick={this.handleRemove} icon={faWindowClose}
                                                            className="fa-2x closeButton"/> : null} */}
                    <img
                        className="favImage"
                        src={this.posterUrl + this.props.favorite.url}
                        alt={this.props.favorite.alt}/>
                </figure>
            </div>
        )
    }
}

//SingleFavorite.contextType = FavoriteContext;

export default SingleFavorite;