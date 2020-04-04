import React, { Component } from "react"
import { Link } from "gatsby"

import { Card, Alert } from "antd"

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // First, last, city, country, date joined, picture
  // picture is cover
  //first last is title
  // cannot expand description, will have to add info as children to card
  //need to pass in user blob
  render() {
    return (
      <Card
        title="userCard"
        cover={<img alt="user image" src={`${user.picture.large}`} />}
      >
        <Meta
          avatar={<Avatar src={`${user.picture.thumbnail}`} />}
          title={`${user.details.firstname} ${user.details.lastname}`}
        />
        <div className="details">
          <p>
            <span>Location</span>
            {`${user.details.city}, ${user.details.country}`}
          </p>
          <p>
            <span>Date Joined</span>
            {`${user.membership.date_joined}`}
          </p>
        </div>
      </Card>
    )
  }
}

export default UserProfile
