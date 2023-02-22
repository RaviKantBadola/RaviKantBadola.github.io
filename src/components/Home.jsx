import React from 'react'
import programmer from "../Assets/programmer.gif"

const Home = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <div style={{marginTop:"90px"}}>
        <h1>
      <span>Hello!
        <br/>
      </span>
      My Name is <span>Ravi Kant Badola</span>
      </h1>
     <h4>Full Stack Web Developer</h4>
     <button>Hire Me</button>
      </div>

      <div>
        <img src={programmer} alt="ravi" />
      </div>
    </div>
  )
}

export default Home
