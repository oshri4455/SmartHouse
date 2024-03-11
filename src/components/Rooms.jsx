import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default function Rooms(props) {
  return (
    <div>
      <h1 style={{color:'greenyellow',fontSize:'40px'}}>Intelligent Living Oasis: Your Ultimate Smart Home</h1>
        {props.rooms.map((val)=>{
return  <Link to={`room${val.name}`}><button id='button2'style={{backgroundColor:val.color}}>{val.name}</button></Link>

        })}


        <Link to={'addRoom'}> <button id='addRoom' title='Click here to add a room' style={{width:'70px',height:'50px',backgroundColor:'blue',color:'white'}}>+</button></Link>
      
    </div>
  )
}
