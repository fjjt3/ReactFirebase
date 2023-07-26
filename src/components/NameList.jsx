import React, { useState } from "react";
import uniqid from "uniqid"; // not installed

const NameList = () => {
  const [name, setName] = useState("");
  const [namelist, setNameslist] = useState([]);

  const addName = (e) => {
    e.preventDefault();
    const newName = {
      id: uniqid(),
      nameTittle: name,
    };
    setNameslist(...namelist, newName);
    setName("");
  };

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
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Formulary to add name</h2>
          <form
            onSubmit={(e) => {
              addName(e);
            }}
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
              value="Register Name"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NameList;
