import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './style.css'

export default function AddRoom(props) {

const [name,setName]=useState('')
const [type,setType]=useState('')
const [color,setColor]=useState('')

const nav = useNavigate()


const validColors = ['red', 'blue', 'green', 'yellow', 'purple', 'black', 'white', 'gray', 'brown', 'orange']; // רשימת צבעים תקנים
const isValidColor = (color) => {
  return validColors.includes(color.toLowerCase()); // בדיקת האם הצבע קיים ברשימת הצבעים התקנים
}

const checkInput = () => {
  if ( name.length === 0 || name.length >= 5) {
    alert('The length of the name is too long');
    nav('/');
    return;
  }
  if (!isValidColor(color)) {
    alert('Fill in the requested color');
    nav('/');
    return;
  }

  // אם לא נקבל אזהרה, נוסיף את החדר
  props.addRoom(name, color, type);
alert('You have successfully added a new room')
  nav('/');
}

  return (
    <div id='divRoom'>
      <br />
      <h2 style={{color:'white'}}>Select which room type you would like to add</h2>
      <br />
      <br />
    
      <select id='select' onChange={(e)=>{setType(e.target.value)}}>
        <option value="">בחר מהרשימה</option>
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
<Link to={'/'}><button id='butoonAdd' onClick={checkInput}>צור</button></Link>


    </div>
  )
}
