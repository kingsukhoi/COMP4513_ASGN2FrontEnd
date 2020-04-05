import React, { Component } from "react"
import { Card, Avatar } from "antd"
const {Meta} =Card

class UserProfile extends Component {

  render() {
    // date.parse then date.toDateString
    let date = this.props.user.membership.date_joined;
    date = Date.parse(date)
    date = new Date(date).toDateString();
    return (
      <Card
        title="User Profile"
        cover={<img alt="user image" src={`${this.props.user.picture.large}`} />}
      >
        <Meta
          avatar={<Avatar src={`${this.props.user.picture.thumbnail}`} />}
          title={`${this.props.user.details.firstname} ${this.props.user.details.lastname}`}
        />
        <div className="details">
          <p>
            <span>Location: </span>
            {`${this.props.user.details.city}, ${this.props.user.details.country}`}
          </p>
          <p>
            <span>Date Joined: </span>
            {`${date}`}
          </p>
        </div>
      </Card>
    )
  }
}

export default UserProfile
