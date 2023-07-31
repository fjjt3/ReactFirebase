import React from "react";

const Cards = (props) => {
    const {image, title, text} = props // object extractor
    return(
    <div className="card" style={{width:"18rem"}}>
        <img src={image} className="card-img-top img-thumbnail" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a href="#" className="btn btn-primary">See more</a>
        </div>    
    </div>
    )
}

export default Cards