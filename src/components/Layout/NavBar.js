import React, { useState } from "react";
import { Button, Modal } from 'antd'
import { LogoutOutlined, ProfileOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Link } from "gatsby";
import { logout } from '../../services/auth';



const NavBar = () => {

    const [showAbout, setShowAbout] = useState(false);
    const openAbout  = () => { setShowAbout(true)}
    const closeAbout  = () => { setShowAbout(false)}

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
              
                    <Button onClick={openAbout}>About <InfoCircleOutlined /></Button>
                    <Button onClick={openAbout}>Profile <ProfileOutlined /></Button>
                    <Button onClick={logout} >Logout <LogoutOutlined /></Button>
               
                <Modal
                    title="My Model"
                    visible={showAbout}
                    onOk={closeAbout}
                    onCancel={closeAbout}
                    footer={[
                        <Button type="primary" onClick={closeAbout}>
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
                        <li><Link to="/api/movies">Return All Movies</Link></li>
                        <li><Link to="/api/movies/20">Movie By ID</Link></li>
                        <li><Link to="/api/brief">Return All Movie Brief Data</Link></li>
                        <li><Link to="/api/find/title/mino">Search by Title</Link></li>
                        <li><Link to="/api/find/yeal/2000/2010">Search by Year</Link></li>
                    </ul>

                </Modal>
            </div>
        </nav>
    );
}

export default NavBar;