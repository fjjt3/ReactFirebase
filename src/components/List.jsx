import React, {Fragment, useState} from "react";

const List = () => {

    const [numbers, setNumbers] = useState([1,2,3,4,5,6])

    return (
        <Fragment>
           <ul>
            {
                numbers.map((item, index) =>
                    <li key={index}>
                        {item} - {index}
                    </li>
                )
            }
           </ul>
        </Fragment>
    )
}

export default List