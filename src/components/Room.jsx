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
    <div id='typeDiv'>
      <h1 style={{color:'white'}}>שם החדר : {props.name}</h1>
      <h1 style={{color:'white'}}>סוג החדר :{props.type}</h1>

    {show()}

    {props.products.slice(0, 5).map((val, index) => {
  let condition = val.condition ? 'green' : 'red';
  return (
    <button key={index} id='button3' onClick={() => { props.changeCondition(props.index, index) }} style={{ backgroundColor: condition }}>
      {val.type}
    </button>
  );
})}



    </div>


  )
}
