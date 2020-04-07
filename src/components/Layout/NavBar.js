import React, { useState, useEffect } from "react"
import { Button, Modal} from "antd"
import {
  LogoutOutlined,
  ProfileOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons"
import { Link } from "gatsby"
import UserProfile from "../UserProfile"

import { makeAuthUrl, logout } from "../../services/auth"
import { queryOptions } from '../../services/helper'

const NavBar = () => {
  const [showAbout, setShowAbout] = useState(false)
  const [showProfile,setShowProfile] = useState(false);
  const [user,setUser] = useState({});
useEffect(() => {
  async function getUser() {
    const authUrl = makeAuthUrl(queryOptions.user);
    let response = await fetch(authUrl);
    let user = await response.json();
  
    setUser(user);
  } getUser()
}, []);
   

  
  const openAbout = () => {
    setShowAbout(true)
  }
  const closeAbout = () => {
    setShowAbout(false)
  }

  const openProfile = () => {
    setShowProfile(true)
  }
  const closeProfile = () => {
    setShowProfile(false)
  }

  return (
    <nav className="bd-navbar navbar has-shadow">
      <div className="navbar-brand">
        <span className="navbar-item fas fa-ticket-alt">
          <Link to={"app/movies"} className="navbar-item fas fa-ticket-alt">
            <img src={"/fa-ticket-alt.png"} alt="fa-ticket-alt" />
          </Link>
          Movie List
        </span>
      </div>
      <div className="navbar-end">
        <Button onClick={openAbout}>
          About <InfoCircleOutlined />
        </Button>
        <Button onClick={openProfile}>
          Profile <ProfileOutlined />
        </Button>
        <Button onClick={logout}>
          Logout <LogoutOutlined />
        </Button>

        <Modal
          title="About"
          visible={showAbout}
          onOk={closeAbout}
          onCancel={closeAbout}
          footer={[
            <Button type="primary" onClick={closeAbout}>
              Close
            </Button>,
          ]}
        >
          <h3 className="title is-3">Group Members:</h3>
          <ul>
            <li>Farsos Bulsara</li>
            <li>Trevor Brown</li>
            <li>Jason Hutson</li>
            <li>Austin Arndt</li>
          </ul>
          <h3 className="title is-3">Technologies</h3>
          <ul>
          <li><a href ="https://nodejs.org/en/about/">NodeJS</a> </li>
          <li><a href ="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a> </li>
          <li><a href ="https://github.com/about">Git</a> </li>
          <li><a href ="https://www.netlify.com/">Netify</a> </li>
          <li><a href ="https://cloud.google.com/appengine/docs">App Engine</a> </li>
          <li><a href ="https://www.docker.com/">Docker</a> </li>
          <li><a href ="https://docs.npmjs.com/about-npm/">NPM</a> </li>
          <li><a href ="https://jwt.io/">JWT</a> </li>
          </ul>
          <h3 className="title is-3">Libraries/Frameworks</h3>
          <ul>

          </ul>
             <li><a href="https://www.gatsbyjs.org/">Gatsby</a></li>
              <li><a href="https://reactjs.org/">React</a></li>
                <li><a href="https://ant.design/">Ant</a></li>
            <li><a href="https://expressjs.com/">Express</a></li>
           <li><a href="http://www.passportjs.org/">Passport</a></li>
           <li><a href="https://mongoosejs.com/">Mongoose</a></li>
           <li>
              <a href="https://bulma.io/">Bulma CSS</a>
            </li>
          <ul>
          <h3 className="title is-3">Helpful resources</h3>
            <li>
              <a href="https://reacttraining.com/react-router/web/example/basic">
                React Router
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/react-input-range">
                react-input-range
              </a>
            </li>
            <li>
              <a href="https://animista.net/play/basic/slide-rotate">
                animista.net
              </a>
            </li>
            <li>
              <a href="https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/">
                Months array
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://bulma.io/">Bulma CSS</a>
            </li>
            <li>
              <a href="https://reacttraining.com/react-router/web/example/basic">
                React Router
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/react-input-range">
                react-input-range
              </a>
            </li>
            <li>
              <a href="https://animista.net/play/basic/slide-rotate">
                animista.net
              </a>
            </li>
            <li>
              <a href="https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/">
                Months array
              </a>
            </li>
          </ul>
          <h3 className="title is-3">API Endpoints:</h3>
          <ul>
            <li>
            <a href={makeAuthUrl(queryOptions.allMovies)}>Return All Movies</a>
            </li>
            <li>
            <a href={makeAuthUrl(`${queryOptions.singleMovie}20`)}>Movie By ID: 20</a>
            </li>
            <li>
            <a href={makeAuthUrl(`${queryOptions.brief}`)}>Return All Movie Brief Data</a>
            </li>
            <li>
            <a href={makeAuthUrl(`${queryOptions.title}mino`)}>Search by Title: mino</a>
            </li>
            <li>
            <a href={makeAuthUrl(`${queryOptions.findYear}1990/2000`)}>Search by Year: 1990-2000</a>
            </li>
            <li>
            <a href={makeAuthUrl(`${queryOptions.findRating}5/6`)}>Search by Rating: 5-6</a>
            </li>
          </ul>
        </Modal>
        <Modal
        //will need to use makeAuthUrl to call user/api to get 
          title="Profile"
          visible={showProfile}
          onOk={closeProfile}
          onCancel={closeProfile}
          footer={[
            <Button type="primary" onClick={closeProfile}>
              Close
            </Button>,
          ]}
        >
          <UserProfile user={user}/>
          
        </Modal>
      </div>
    </nav>
  )
}

export default NavBar
