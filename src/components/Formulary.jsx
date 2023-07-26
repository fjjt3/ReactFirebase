import React, { useState } from "react";

const Formulary = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <form className="form-group">
        <input
          placeholder="Your name"
          className="form-control mb-3"
          type="text"
          onChange={ (e) => {setName(e.target.value)}}
        />
        <input
          placeholder="Your age"
          className="form-control mb-3"
          type="text"
          onChange={ (e) => {setAge(e.target.value)}}
        />
        <input className="btn btn-info btn-block mb-3" type="submit" />
      </form>
    </div>
  );
};

export default Formulary;
