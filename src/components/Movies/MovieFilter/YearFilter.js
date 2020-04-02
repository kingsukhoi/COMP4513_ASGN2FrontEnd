import React from 'react';
import { Button, Radio, InputNumber } from "antd"
import { ArrowRightOutlined } from '@ant-design/icons'
import {queryOptions} from "../index";
import filterStyle from './filterStyle.module.css'


class YearFilter extends React.Component {

    selectorOptions = {
        min: 0,
        max: 1,
        between: 2
    };

    state = {
        minYear: 1900,
        maxYear: new Date().getFullYear(),
        yearSelected: this.selectorOptions.between
    };

    changeInput = (e) => {
        this.setState({ yearSelected: e.target.value });
    };

    filter = ()=>{
        let minSearch = this.state.minYear;
        let maxSearch = this.state.maxYear;
        let url = queryOptions.findYear;
        switch(this.state.yearSelected) {
            case 0:
                maxSearch = document.querySelector("#year-before").value;
                break;
            case 1:
                minSearch = document.querySelector("#year-after").value;
                break;
            case 2:
                minSearch = document.querySelector("#year-between-min").value;
                maxSearch = document.querySelector("#year-between-max").value;
                break;
            default:
        }
        url = `${url}${minSearch}/${maxSearch}`;
        this.props.runSearch(url);
    };

    render() {
        return (

            <div className="field">{/* Year Filter area */}
                <h3 className="title is-3">Year</h3>
                <div className={filterStyle.horizontalFlex}>
                    <Radio.Group onChange={this.changeInput} value={this.state.yearSelected} className={filterStyle.flex_one}>

                        <Radio className={filterStyle.radioStyle} value={this.selectorOptions.min}>
                            Before 
                        </Radio>
                        

                        <Radio className={filterStyle.radioStyle} value={this.selectorOptions.max}>
                            After  
                        </Radio>
     
                        <Radio className={filterStyle.radioStyle} value={this.selectorOptions.between}>
                            Between 
                        </Radio>

                    </Radio.Group>  

                    <div className={filterStyle.inputContainer}>
                        <InputNumber  defaultValue={this.state.maxYear} disabled={this.state.yearSelected !== this.selectorOptions.min} id={"year-before"}/>
                        <InputNumber  defaultValue={this.state.minYear} disabled={this.state.yearSelected !== this.selectorOptions.max} id={"year-after"}/>
                        <div>
                        <InputNumber 
                            defaultValue={this.state.minYear} 
                            disabled={this.state.yearSelected !== this.selectorOptions.between} 
                            id={"year-between-min"}
                        /> - <InputNumber 
                            defaultValue={this.state.maxYear} 
                            disabled={this.state.yearSelected !== this.selectorOptions.between} 
                            id={"year-between-max"}
                            />
                        </div>
                    </div>
                </div>
                <Button onClick={this.filter}>Search Year <ArrowRightOutlined /></Button>
            </div>
        )
    }
}

export default YearFilter;

