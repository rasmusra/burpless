import React from "react"
import Feature from "./Feature"

function Panel(props) {
    return (
        <div>
            Features
            <hr />
            { 
                props.data && 
                Array.isArray(props.data) && 
                props.data.map(f => <Feature key='1' data={f} handleClick={props.handleClick} />)
            }
        </div>
    )
}

export default Panel