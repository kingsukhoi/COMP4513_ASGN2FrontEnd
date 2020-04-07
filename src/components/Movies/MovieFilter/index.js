import React from 'react';
import * as _ from "lodash";
import { queryOptions } from "../../../services/helper";
import YearFilter from './YearFilter';
import RatingsFilter from './RatingsFilter';
import { Button, Input} from "antd";
import '../../../style/colors.css';
class MovieFilter extends React.Component {

    buttonStyle = {
        marginRight: ".5rem",
    };

    clearQueryParams = (e)=>{
        this.props.onSearch(queryOptions.allMovies);
    };

    runSearch = (search)=>{
        this.props.onSearch(search);
    };

    render() {
        const { Search } = Input;
        return (
            <div className="column is-two-fifths">
                <div className={`container box `} >
                    <h1 className="title has-text-centered">Movie Filters</h1>
                    <label className="title is-3" htmlFor="TitleFilter">Title</label>

                    <Search
                        placeholder={"Search for movie title."}
                        onSearch={value => value === "" ? this.runSearch(queryOptions.allMovies) : this.runSearch(`${queryOptions.title}${value}`)}
                        enterButton
                    />
                    <YearFilter runSearch={this.runSearch}/>

                    <RatingsFilter runSearch={this.runSearch} />
                    
        {/* Form controls */}
                    <div className="control has-text-centered">
                        <Button   
                            danger
                            onClick={this.clearQueryParams}
                        >Clear
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieFilter;

