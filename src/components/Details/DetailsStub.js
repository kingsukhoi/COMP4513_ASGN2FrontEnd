import React from 'react';
import { Tag } from 'antd'

const DetailStub = (props) => {
    const {data, title} = props;
    return ( 
        <div className="column">
            <h3>{title}</h3>
            <div className="tags">
                { ( data != null && typeof data !== 'undefined') ?
                    data.map(d => <Tag className="stub-info" key={(typeof d.id !== 'undefined') ? d.id:d.iso_3166_1}>{d.name}</Tag>) :
                    <Tag >No {title} Listed</Tag>
                }
            </div>
        </div>
        );
}
 
export default DetailStub;