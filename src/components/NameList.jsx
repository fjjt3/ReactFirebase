import React, {useState} from "react";

const NameList = () => {
    return(
        <div>
            <h2>CRUD APP</h2>
            <div className="row">
                <div className="col">
                    <h2>Names List</h2>
                </div>
                <div className="col">
                    <h2>Formulary to add name</h2>
                    <form className="form-group">
                        <input className="form-control mb-3" type="text" placehoder="Introduce your name"/>
                        <input className="btn btn-info btn-block" type="submit" value="Register Name"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NameList