import React, {Fragment} from "react";

function Hello(){
    let saludo = 'How are u?'
    return(
        <Fragment>
            <h2> Firs Component Hello {saludo}</h2>
        </Fragment>
    )
}

export default Hello