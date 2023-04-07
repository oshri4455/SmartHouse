import React,{useState} from 'react'
import AddProduct from './AddProduct'

import './style.css'


export default function Room(props) {

    const [flag,setFlag]=useState(false)

const show =()=>{
if(flag == false){
    return <div>
        <AddProduct  change={change} index={props.index} addProduct={props.addProduct}  />
    </div>
}else{
    return <button onClick={change}>+</button>
}
}

const change =()=>{

    setFlag(!flag)
}



  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.type}</h1>

    {show()}

{props.products.map((val,index)=>{

let condition = val.condition ? 'green' : 'red'

return <button  id='button3' onClick={()=>{props.changeCondition(props.index,index)}}  style={{backgroundColor:condition}} >{val.type}</button>


})}




    </div>


  )
}
