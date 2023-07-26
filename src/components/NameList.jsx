import React, { useState } from "react";
import uniqid from "uniqid"; // not installed

const NameList = () => {
  const [name, setName] = useState("");
  const [namelist, setNameslist] = useState([]);
  const [editionMode, setEditionMode] = useState(false)
  const [id, setId] = useState('')
  const [error, setError] = useState(null)

  const addName = (e) => {
    e.preventDefault();
    if(!name.trim()){
        setError('Name field is empty')
        return
    }
    const newName = {
      id: uniqid(),
      nameTittle: name,
    };
    setNameslist(...namelist, newName);
    setName("");
    setName(null)
  };

  const deleteName = (id) =>{

    const newArray = namelist.filter( item => item.id !== id)
    setNameslist(newArray)
  }

  const edit = (item) => {
    setEditionMode(true)
    setName(item.nameTittle)
    setId(item.id)
  }

  const editName = (e) => {
    e.preventDefault();
    const newArray = namelist
    .map( item => item.id === id ? {id:id, nameTittle:name}: item)
    setNameslist(newArray)
    setEditionMode(false)
    setName('')
  }

  return (
    <div>
      <h2>CRUD APP</h2>
      <div className="row">
        <div className="col">
          <h2>Names List</h2>
          <ul className="list-group">
            {namelist.map((item) => (
              <li key="{item.id}" className="list-group-item">
                {item.nameTittle}
                <button 
                className="btn btn-info float-right"
                onClick={ () => {deleteName(item.id)}}
                >
                    DELETE
                </button>
                <button 
                className="btn btn-danger float-right"
                onClick={ () => {edit(item)}}
                >
                    EDIT
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Formulary to add name</h2>
          <form
            onSubmit={editionMode ? editName: addName}
            className="form-group"
          >
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-control mb-3"
              type="text"
              placehoder="Introduce your name"
              value={name}
            />
            <input
              className="btn btn-info btn-block"
              type="submit"
              value={editionMode ? "Edit Name" :"Register Name"}
            />
          </form>
          {
            error != null ? (
                <div className="alert alert-danger">
                    {error}
                </div>
            ):
            (
                <div></div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default NameList;
