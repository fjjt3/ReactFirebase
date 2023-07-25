import React, {Fragment, useState} from "react";

const Counter = () => {

    const [number, setNumber] = useState(0)
    const Increase = () => {
        setNumber(number + 1)
    }

    const Decrease = () => {
        setNumber(number - 1)
    }


    return (
        <Fragment>
            <h2> result: {number}</h2>
            <button onClick={Increase}>increase</button>
            <button onClick={Decrease}>decrease</button>
        </Fragment>
    )
}

export default Counter
