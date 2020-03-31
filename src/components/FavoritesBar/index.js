import React from "react";
import SingleFavorite from "./SingleFavorite";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";


class FavoritesBar extends React.Component {

    state = {
        expanded: true
    };

    // renderList() {
    //     return this.props.favorites.map((favorite, index) =>
    //         <SingleFavorite favorite={favorite} key={favorite.id}/>
    //     );
    // }

    style = {
        bottom: 0,
        marginLeft: "50%"
    };

    renderFavsList() {
        if (this.state.expanded)
            return (
                <div className="has-background-grey navbar">
                    <div className="navbar-item">
                        <h2 className="has-text-grey-light">Your Favorites</h2>
                        {/* {this.renderList()} */}
                    </div>
                </div>
            );
        return null
    }

    toggleClose = (e) => {
        this.setState({...this.state, expanded: !this.state.expanded})
    };

    render() {
        return (
            <React.Fragment>
                {/* {this.renderFavsList()} */}
                <div style={this.style} onClick={this.toggleClose}>
                    {/* //<FontAwesomeIcon className="fa-2x" icon={this.state.expanded ? faCaretUp : faCaretDown}/> */}
                </div>
            </React.Fragment>)
    }


}


export default FavoritesBar;