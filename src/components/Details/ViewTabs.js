import React from "react";
import {Link} from "gatsby";
import { Tabs, Table } from 'antd'

class ViewTabs extends React.Component {

    generateCrewTable =(crew)=>{   
        const data = [];
        crew.forEach((crew) => {
            data.push({
                key: crew.credit_id,
                department: crew.department,
                job: crew.job,
                name: crew.name,
            });
        });
        return data;
    }

    generateCastTable =(cast)=>{   
        const data = [];
        cast.forEach((cast) => {
            data.push({
                key: cast.id,
                character: cast.character,
                actor: cast.name,
            });
        });
        return data;
    }

    render() {
        const { TabPane } = Tabs;
        const {cast, crew} = this.props;
        
        const castColumns = [
            {
              title: 'Character',
              dataIndex: 'character',
            },
            {
              title: 'Actor',
              dataIndex: 'actor',
            },
            {
              title: '',
              dataIndex: '',
              render: (record) =>( <p onClick={(e) => {this.props.castButton(record.key)}} className="button is-1" style={{margin: "0"}}>View</p> ),
            },
          ];

          const crewColumns = [
            {
              title: 'Department',
              dataIndex: 'department',
            },
            {
              title: 'Job',
              dataIndex: 'job',
            },
            {
              title: 'Name',
              dataIndex: 'name',
            },
          ];
        return (
            <div id="CastAndCrew" className="column container box">
                <Link to="app/movies" path={"app/movies"} className="button is-1 is-right" style={{ margin: "0", float: 'right'}}>Back</Link>
                <Tabs type="card">
                    <TabPane tab="Cast" key="1">
                        {cast !== null ? <Table columns={castColumns} dataSource={this.generateCastTable(cast)} /> : <div> No Cast data availible </div>} 
                    </TabPane>
                    <TabPane tab="Crew" key="2">
                        {crew !== null ? <Table columns={crewColumns} dataSource={this.generateCrewTable(crew)} /> : <div> No Crew data availible </div>}  
                    </TabPane>
                </Tabs>
                
            </div>
        )
    }
}

export default ViewTabs;