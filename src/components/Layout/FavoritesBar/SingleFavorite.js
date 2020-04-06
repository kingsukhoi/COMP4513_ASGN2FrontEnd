import React from "react";
import "../../../style/Favorite.css"
import { CloseCircleTwoTone } from '@ant-design/icons'


class SingleFavorite extends React.Component {
    posterUrl = "https://image.tmdb.org/t/p/w92";

    state = {
        hovering: false
    };

    toggleHover = (e) => {
        this.setState(prevState => ({hovering: !prevState.hovering}));
    };
    handleRemove = (e) => {
        this.props.removeFav(this.props.favorite.id);
    }

    render() {
        return (
            <div className="column">
                <figure className="image"
                        onMouseEnter={this.toggleHover}
                        onMouseLeave={this.toggleHover}
                >
                    {/* Needs a good colour use  twoToneColor="#eb2f96" */}
                    {this.state.hovering ? <CloseCircleTwoTone onClick={this.handleRemove} 
                                                            className="fa-2x closeButton"
                                                            /> : null}
                    <img
                        className="favImage"
                        src={this.props.favorite.poster ? this.posterUrl + this.props.favorite.poster : this.posterUrl + this.props.favorite.imageUrl}
                        alt={this.props.favorite.alt}/>
                </figure>
            </div>
        )
    }
}

export default SingleFavorite;