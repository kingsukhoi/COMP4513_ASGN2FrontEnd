import React from "react";
import { Button, Modal } from 'antd'
import {Link} from "gatsby";

class NavBar extends React.Component {

    state = { showAbout: false }
    open  = () => { this.setState({showAbout: true})}
    close  = () => { this.setState({showAbout: false})}

    render() {
        return (
            <nav className="bd-navbar navbar has-shadow">
                <div className="navbar-brand">
                    <span className="navbar-item fas fa-ticket-alt">
                        <Link to={"app/"} className="navbar-item fas fa-ticket-alt">
                            <img src={"/fa-ticket-alt.png"} alt="fa-ticket-alt" />
                        </Link>Movie List

                        </span>
                </div>

                <div className="navbar-end">
                    <Button onClick={this.open}>
                        About
                    </Button>
                    <Modal
                        title="My Model"
                        visible={this.state.showAbout}
                        onOk={this.close}
                        onCancel={this.close}
                        footer={[
                            <Button type="primary" onClick={this.close}>
                                Close
                            </Button>
                          ]}
                    >
                         <p>Group Members:</p>
                        <ul>
                            <li>Farsos Bulsara</li>
                            <li>Trevor Brown</li>
                            <li>Jason Hutson</li>
                            <li>Austin Arndt</li>
                        </ul>
                        <ul>
                            <li><a href="https://bulma.io/">Bulma CSS</a></li>
                            <li><a href="https://reacttraining.com/react-router/web/example/basic">React Router</a></li>
                            <li><a href="https://www.npmjs.com/package/react-input-range">react-input-range</a></li>
                            <li><a href="https://animista.net/play/basic/slide-rotate">animista.net</a></li>
                            <li><a href="https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/">Months
                                array</a></li>
                        </ul>
                        <p>API Endpoints:</p>
                        <ul>
                            <li><a>By title: Jaws</a></li>
                            <li></li>
                            
                        </ul>

                    </Modal>
                </div>
            </nav>

        )
    }
}

export default NavBar;