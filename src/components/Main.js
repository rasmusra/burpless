import React from "react"
import Scenario from "./Scenario"

function Main(props) {
    return (
        <div>
            {
                props.data &&
                Array.isArray(props.data) &&
                props.data.map(s => <Scenario key='1' data={s} />)
            }
        </div>
    )
}

export default Main