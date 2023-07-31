import React from "react";

const Willkommen = (props) => {
    const {name} = props
    return(
    <div>
        <h2>Wie willkommen Sie auf unserer Website? {name}</h2>
    </div>
    )
}

export default Willkommen