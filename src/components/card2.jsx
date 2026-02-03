import React from 'react'

const card2 = (props) => {
    console.log(props)
  return (
    <div className='child'>
        <img src={props.img} alt="img" />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nobis?</p>
        <button>View Profile</button>
    </div>
  )
}

export default card2