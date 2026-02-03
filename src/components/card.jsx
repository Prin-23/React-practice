import React from 'react'

const card = (props) => {
  console.log(props);
  console.log(props.user)
  
  return (
    <div className="card">
      <img src="src\images\destination-1.jpg" alt="img" />
      <h1>{props.user}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nulla!</p>
      <button>View Profile</button>
    </div>
  )
}

export default card