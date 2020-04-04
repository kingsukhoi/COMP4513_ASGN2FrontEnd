import { Component } from "react"
import { Link } from "gatsby"

//TODO import style
import { Card, Button, Input, Form, Alert } from "antd"

ccc
class About extends Component {
  constructor() {
    this.state = {
      names: ["Jason Hutson", "Austin Arndt", "Trevor Brown", "Farsos Bulsara"],
      tech: [
          {name: "NodeJS", link:"https://nodejs.org/en/about/"},
          {name: "MongoDB Atlas", link:"https://www.mongodb.com/cloud/atlas"},
          {name: "Git", link:"https://github.com/about"},
          {name: "Netify", link:"https://www.netlify.com/"},
          {name: "App Engine", link:"https://cloud.google.com/appengine/docs"},
          {name: "Docker", link:"https://www.docker.com/"},
          {name: "NPM", link:"https://docs.npmjs.com/about-npm/"},
          {name: "JWT", link:"https://jwt.io/"}
      ],
      lib: [
          {name:"Gatsby", link:"https://www.gatsbyjs.org/"},
          {name:"React", link:"https://reactjs.org/"},
          {name:"Ant", link:"https://ant.design/"},
          {name:"Express", link:"https://expressjs.com/"},
          {name:"Passport", link:"http://www.passportjs.org/"},
          {name:"Mongoose", link:"https://mongoosejs.com/"}
      ],
      form: []//i don't think i need this?
    }
  }

  render() {
    return (
      <div className="aboutHolder">
        <Card title="names">
          <ul>{this.state.names.map((n, i) => `<li>${n}</li>`)}</ul>
        </Card>
        <Card title="tech">
            <ul>
                {this.state.tech.map((t,i)=>`<p><a href="${t.link}">${t.name}</a></p>`)}
            </ul>
        </Card>
        <Card title="libraries">
            <ul>
                {this.state.lib.map((l,i)=>`<p><a href="${l.link}">${l.name}</a></p>`)}
            </ul>
            </Card>
        <Card title="form"></Card>
      </div>
    )
  }
}

export default About
