import React from "react";
function SingleCrew(props) {
        return  <tr>
        <td>{props.department}</td>
        <td>{props.job}</td>
        <td>{props.name}</td>
    </tr>
}
export default SingleCrew;