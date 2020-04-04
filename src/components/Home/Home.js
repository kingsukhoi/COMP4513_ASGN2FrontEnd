import React from "react";
import * as _ from "lodash";
import { Link } from "gatsby"
import { navigate } from "@reach/router"
import { CSSTransition } from 'react-transition-group';
import "../../style/Home.css";


import {  Card, Button, Input, Form, Alert} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Hero } from 'react-bulma-components'



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
            <div className="is-fullheight hero" >
            <div className="column is-4 is-offset-4" style={this.style}>
                <CSSTransition exit={true} in={this.state.transition} classNames="searchBox" timeout={1500} appear >
                    <Card className="box searchBox">
                        <h3 className="title has-text-black has-text-centered">Your Movie List</h3>

                        <div className="field">
                            <div className="control">
                                <Input name="searchQuery" onChange={this.onChange} className="input" type="text" placeholder="Title" />
                            </div>
                        </div>
                        <div className="level">
                            <Button onClick={() => this.exit("show")} className="level-item has-text-centered button is-block is-info">Show All Movies</Button>
                            <Button onClick={() => this.exit("search")} className="level-item has-text-centered button is-block is-info">Search Movies</Button>
                        </div>
                    </Card>
                </CSSTransition>
            </div>

            <footer>
                <a href="https://unsplash.com/@marjan_blan" className="navbar-end" >

                    <span className="tag is-dark" style={this.linkBottomRight}>Photo by</span>
                    <span className="tag is-info" style={this.linkBottomLeft}>@marjanblan</span>

                </a>
            </footer>
        </div>
        )
    }

}

export default Home;