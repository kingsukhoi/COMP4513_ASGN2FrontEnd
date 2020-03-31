import React from "react";
import * as _ from "lodash";
import { Hero } from 'react-bulma-components'
import { Link } from "gatsby"
import { navigate } from "@reach/router"
import { CSSTransition } from 'react-transition-group';
import 'react-bulma-components/dist/react-bulma-components.min.css'
import "../style/Home.css";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchQuery: "", searchEnter: null, transition: true };
    }
    onChange = (e) => {
        const currElem = e.target;
        const key = currElem.getAttribute('name');
        const newState = _.cloneDeep(this.state);
        newState[key] = currElem.value;
        this.setState(newState);
    };

    style = {
        paddingTop: "35vh"
    };

    linkBottomRight = {
        "borderBottomRightRadius": "0",
        "borderTopRightRadius": "0"
    };

    linkBottomLeft = {
        "borderBottomLeftRadius": "0",
        "borderTopLeftRadius": "0"
    };

    exit(command) {
        const newState = _.cloneDeep(this.state);
        newState.transition = false;
        newState.searchEnter = command;
        this.setState(newState);
    }

    render() {
        switch (this.state.searchEnter) {

            case "show":
                return (<Link push to={"app/movies/"} />);
            case "search":
                return (<Link push to={"app/movies/?title=" + this.state.searchQuery} />)
            default:
                return this.renderNormal();
        }
    }


    renderNormal() {
        return (
            <Hero className="is-fullheight hero">
                <div className="column is-4 is-offset-4" style={this.style}>
                    <CSSTransition exit={true} in={this.state.transition} classNames="searchBox" timeout={1500} appear >
                        <div className="box searchBox">
                            <h3 className="title has-text-black has-text-centered">Your Movie List</h3>

                            <div className="field">
                                <div className="control">
                                    <input name="searchQuery" onChange={this.onChange} className="input" type="text" placeholder="Title" />
                                </div>
                            </div>
                            <div className="level">
                                <div onClick={() => navigate("/app/movies")} className="level-item has-text-centered button is-block is-info">Show All Movies</div>
                                {/* <Link to={"app/movies"} >Show All Movies</Link> */}
                                <div onClick={() => navigate(`/app/movies?title=${this.state.searchQuery}`)} className="level-item has-text-centered button is-block is-info">Search Movies</div>
                            </div>
                        </div>
                    </CSSTransition>
                </div>

                <footer>
                    <a href="https://unsplash.com/@marjan_blan" className="navbar-end" >

                        <span className="tag is-dark" style={this.linkBottomRight}>Photo by</span>
                        <span className="tag is-info" style={this.linkBottomLeft}>@marjanblan</span>

                    </a>
                </footer>
            </Hero>

        )
    }

}

export default Home;