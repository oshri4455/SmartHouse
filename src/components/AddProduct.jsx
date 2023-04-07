
import React ,{useState} from 'react'

export default function AddProduct(props) {
const [product,setProduct]=useState('מנורה')

 


  return (
    <div>
      
<select id='select' onChange={(e)=>{setProduct(e.target.value)}}>
    <option value="מנורה">מנורה</option>
    <option value="סטריאו">סטריאו</option>
    <option value="מזגן">מזגן</option>
</select>
<br />
<button id='button3' onClick={()=>{props.addProduct(props.index,product);  props.change()}}>הוסף מוצר </button>

    </div>
  )
}
