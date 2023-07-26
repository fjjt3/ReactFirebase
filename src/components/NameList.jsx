import React, {useState} from "react";
import uniqid from 'uniqid' // not installed

const NameList = () => {

    const [name, setName] = useState('')
    const [namelist, setNameslist] = useState([])

    const addName = (e) => {
        e.preventDefault()
        const newName = {
            id: uniqid(),
            nameTittle: name
        }
        setNameslist(...namelist, newName)
    }

    return(
        <div>
            <h2>CRUD APP</h2>
            <div className="row">
                <div className="col">
                    <h2>Names List</h2>
                </div>
                <div className="col">
                    <h2>Formulary to add name</h2>
                    <form onSubmit={(e)=> {addName(e)}} className="form-group">
                        <input onChange={(e)=>{setName(e.target.value)}} className="form-control mb-3" type="text" placehoder="Introduce your name"/>
                        <input className="btn btn-info btn-block" type="submit" value="Register Name"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NameList