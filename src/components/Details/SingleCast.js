import React from "react";

function SingleCast(props) {
    function handleClick() {
        props.castButton(props.id)
    }

    return (
        <tr>
            <td>{props.character}</td>
            <td>{props.name}</td>
            <td>
                <p onClick={handleClick} className="button is-1" style={{margin: "0"}}>View</p>
            </td>
        </tr>)
}

export default SingleCast;