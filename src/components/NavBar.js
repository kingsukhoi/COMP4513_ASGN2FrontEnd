import React from "react";
//import ticket from "../Images/fa-ticket-alt.png";
// import {Link} from "react-router-dom";
// import Modal from 'react-modal';
// import "../Style/About.css"


class NavBar extends React.Component {

    state = { showAbout: false }
    open  = () => { this.setState({showAbout: true})}
    close  = () => { this.setState({showAbout: false})}

    render() {
        return (
            <nav className="bd-navbar navbar has-shadow">
                {/* <Modal isOpen={this.state.showAbout} className="">
                    <header className="modal-card-head">
                        <p className="modal-card-title">About</p>

                    </header>
                    <section className="modal-card-body">
                        <p>Group Members:</p>
                        <ul>
                            <li>Farsos Bulsara</li>
                            <li>Trevor Brown</li>
                        </ul>
                        <ul>
                            <li><a href="https://bulma.io/">Bulma CSS</a></li>
                            <li><a href="https://reacttraining.com/react-router/web/example/basic">React Router</a></li>
                            <li><a href="https://www.npmjs.com/package/react-input-range">react-input-range</a></li>
                            <li><a href="https://animista.net/play/basic/slide-rotate">animista.net</a></li>
                            <li><a href="https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/">Months
                                array</a></li>
                        </ul>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-primary" onClick={this.close}>Close</button>
                    </footer>
                </Modal> */}

                <div className="navbar-brand">
                    <span className="navbar-item fas fa-ticket-alt">
                        {/* <Link to={"/"} className="navbar-item fas fa-ticket-alt">
                            <img src={ticket} alt="fa-ticket-alt" />
                        </Link>Movie List */}

                        </span>
                </div>

                <div className="navbar-end">
                    <button className="button navbar-item" onClick={this.open}>
                        <span>About</span>
                    </button>
                </div>
            </nav>

        )
    }
}

export default NavBar;