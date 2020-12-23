import React from "react"

function Feature(props) {

  return (
    <div>
      <button
        className='link'
        onClick={() => props.handleClick(props.data.Feature)}>
        {props.data.Feature.Name}
      </button>
    </div>
  )
}

export default Feature 