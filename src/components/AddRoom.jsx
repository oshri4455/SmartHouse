import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './room.css'
import './addroom.css'
export default function AddRoom(props) {

const [name,setName]=useState('')
const [type,setType]=useState('')
const [color,setColor]=useState('')

const nav = useNavigate()





  return (
    <div>
      <select id='select' onChange={(e)=>{setType(e.target.value)}}>
        <option value="מטבח">מטבח</option>
        <option value="סלון">סלון</option>
        <option value="חדר שינה">חדר שינה</option>
        <option value="אמבטיה">אמבטיה</option>
      </select>
      <br />
      <input className='inpt' onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='name' />
      <br />
      <br />
      <input className='inpt'  onChange={(e)=>{setColor(e.target.value)}} type="text" placeholder='color' />
      <br />
<br />
<Link to={'/'}><button id='butoonAdd' onClick={()=>{ props.addRoom(name,color,type)}}>צור</button></Link>


    </div>
  )
}
