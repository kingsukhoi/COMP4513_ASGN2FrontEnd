import React from 'react';
import {navigate} from "gatsby";
import { HeartOutlined, ArrowsAltOutlined } from '@ant-design/icons'
import { addFavorite } from '../../services/helper'
import { Card } from 'antd'
import cardStyle from './cardStyle.module.css'

class SingleMovie extends React.Component {
    posterLink = "https://image.tmdb.org/t/p/w154/";

    onFavsClick = (e) => {
        addFavorite(this.props.id);
    };

    render() {
        return (
            <Card
                hoverable
                className={cardStyle.cardStyle}
                actions={[
                    <HeartOutlined />,
                    <ArrowsAltOutlined onClick={()=>{navigate(`/app/details/?id=${this.props.id}`)}}/>

                ]}
                bodyStyle={{padding: 0}}
            >
                <Card.Grid hoverable={false} className={cardStyle.imageStyle}><img  src={this.posterLink + this.props.imageUrl} alt={this.props.title} onClick={()=>{navigate(`/app/details/?id=${this.props.id}`)}}/></Card.Grid>
                <Card.Grid hoverable={false} className={cardStyle.gridStyle}> {this.props.title}</Card.Grid>
                <Card.Grid hoverable={false} className={cardStyle.gridStyle}> {this.props.releaseDate}</Card.Grid>
                <Card.Grid hoverable={false} className={cardStyle.gridStyle}> {this.props.rating}</Card.Grid>
            </Card>
        )
    }
}

export default SingleMovie;