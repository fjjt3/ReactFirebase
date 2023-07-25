import React from "react";

const Formulary = () => {
    return(
        <div>
            <form className="form-group">
                <input placeholder="Your name" className="form-control mb-3" type="text"/>
                <input placeholder="Your age" className="form-control mb-3" type="text"/>
                <input className="btn btn-info btn-block mb-3" type="submit"/>
            </form>
        </div>
    )
}

export default Formulary