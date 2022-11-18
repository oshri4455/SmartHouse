import React from 'react'
import { Link } from 'react-router-dom'

import './room.css'
import './addroom.css'
export default function Rooms(props) {
  return (
    <div>
        {props.rooms.map((val)=>{
return  <Link to={`room${val.name}`}><button id='button2'style={{backgroundColor:val.color}}>{val.name}</button></Link>

        })}


        <Link to={'addRoom'}> <button id='addRoom'>+</button></Link>
      
    </div>
  )
}
