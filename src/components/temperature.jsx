import React, {useState} from "react";

const Temperature = () => {

    const [temperature, setTemperature] = useState(19)
    const upTemp = () =>{
        setTemperature(temperature + 1)
    }
    const downTemp = () =>{
        setTemperature(temperature - 1)
    }


    return (
        <div>
            <h2>The temperature is: {temperature} </h2>
            <p>
                {
                    temperature > 21 ? 'it is warn' : 'it is cold'
                }
            </p>
            <button onClick={upTemp}>Increase Temperature</button>
            <button onClick={downTemp}>Decrease Temperature</button>
        </div>


    )
}

export default Temperature