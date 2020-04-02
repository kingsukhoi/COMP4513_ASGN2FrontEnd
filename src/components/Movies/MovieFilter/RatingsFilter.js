import React from 'react';
import { Button, Radio, Slider } from "antd"
import { ArrowRightOutlined } from '@ant-design/icons'
import {queryOptions} from "../index";
import filterStyle from './filterStyle.module.css'


class RatingsFilter extends React.Component {
    buttonStyle = {
        marginRight: ".5rem",
    };
    sliderRange = {
        min: 0,
        max: 10
    };
    selectorOptions = {
        min: 0,
        max: 1,
        between: 2
    };

    state = {
        ratingSelected: this.selectorOptions.between,
        lessThan: this.sliderRange.max,
        greaterThan: this.sliderRange.min,
        betweenBottom: this.sliderRange.min,
        betweenTop: this.sliderRange.max
    };

    changeInput = (e) => {
        this.setState({ ratingSelected: e.target.value });

    };

    filter = ()=>{
        let minSearch = this.sliderRange.min;
        let maxSearch = this.sliderRange.max;
        let url = queryOptions.findRating;
        switch(this.state.ratingSelected) {
            case 0:
                minSearch = this.state.greaterThan;
                break;
            case 1:
                maxSearch = this.state.lessThan;
                break;
            case 2:
                minSearch = this.state.betweenBottom;
                maxSearch = this.state.betweenTop;
                break;
            default:
        }
        url = `${url}${minSearch}/${maxSearch}`;
        this.props.runSearch(url);
    };
    updateFilterParams = (value) => {
        let minSearch = 0;
        let maxSearch = 10;
        switch(this.state.ratingSelected) {
            case 0:
                this.setState({greaterThan: value});
                break;
            case 1:
                
                this.setState({lessThan: value});
                break;
            case 2:
                minSearch = value[0];
                maxSearch = value[1];
                this.setState({betweenBottom: minSearch, betweenTop: maxSearch});
                break;
            default:
        }

    };

    render() {
        return (
            <div className="field">
                <h3 className="title is-3">Rating</h3>
                <div className={filterStyle.horizontalFlex}> 
                    <Radio.Group onChange={this.changeInput} value={this.state.ratingSelected} className={filterStyle.flex_one}>

                        <Radio className={filterStyle.radioStyle} value={this.selectorOptions.max}>
                            Less than
                        </Radio>


                        <Radio className={filterStyle.radioStyle} value={this.selectorOptions.min}>
                            Greater than 
                        </Radio>

                        <Radio className={filterStyle.radioStyle} value={this.selectorOptions.between}>
                            Between 
                        </Radio>

                    </Radio.Group>

                    <div  className={filterStyle.inputContainer} className={filterStyle.flex_one}>
                        <Slider 
                            onChange={this.updateFilterParams}
                            min={this.sliderRange.min} max={this.sliderRange.max}   
                            disabled={this.state.ratingSelected !== this.selectorOptions.max}
                        />
                        <Slider 
                            onChange={this.updateFilterParams}
                            min={this.sliderRange.min} max={this.sliderRange.max}   
                            disabled={this.state.ratingSelected !== this.selectorOptions.min}
                        />
                        <Slider
                            onChange={this.updateFilterParams}
                            range min={this.sliderRange.min} 
                            max={this.sliderRange.max} defaultValue={[0,10]}  
                            disabled={this.state.ratingSelected !== this.selectorOptions.between}
                        />
                    </div>  
                </div>
                <Button onClick={this.filter}>Search Ratings <ArrowRightOutlined /></Button>
            </div>
        )
    }
}

export default RatingsFilter;

