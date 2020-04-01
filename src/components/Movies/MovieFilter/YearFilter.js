import React from 'react';
import { Radio, InputNumber } from "antd"
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
        // const newState = _.cloneDeep(this.state);
        // const curr = e.target;
        // const name = curr.name;
        // newState[name] = Number(curr.value);
        this.setState({ yearSelected: e.target.value });
        // this.updateParams()
    };

    // runSearch = (e)=>{
    //     this.props.onSearch();
    // };

    render() {
        console.log(filterStyle.inputContainer);
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
                        <InputNumber  defaultValue={this.state.maxYear} disabled={this.state.yearSelected !== this.selectorOptions.min} />
                        <InputNumber  defaultValue={this.state.minYear} disabled={this.state.yearSelected !== this.selectorOptions.max} />
                        <div>
                        <InputNumber  defaultValue={this.state.minYear} disabled={this.state.yearSelected !== this.selectorOptions.between}/> - <InputNumber  defaultValue={this.state.maxYear} disabled={this.state.yearSelected !== this.selectorOptions.between}/>
                        </div>
                            
                    </div>
                    
                    </div>
            </div>


        )
    }
}

export default YearFilter;

