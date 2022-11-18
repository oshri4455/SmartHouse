
import React ,{useState} from 'react'

export default function AddProduct(props) {
const [product,setProduct]=useState('מנורה')

const checkProduct = ()=>{
  if(product.length <= 5){
    alert('maximum 5 product on the room')
      return
    
  }
}

  return (
    <div>
      
<select id='select' onChange={(e)=>{setProduct(e.target.value)}}>
    <option value="מנורה">מנורה</option>
    <option value="סטריאו">סטריאו</option>
    <option value="מזגן">מזגן</option>
</select>
<br />
<button id='button3' onClick={()=>{props.addProduct(props.index,product) ;  props.change();checkProduct()}}>הוסף מוצר </button>

    </div>
  )
}
