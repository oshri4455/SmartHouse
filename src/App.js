import {HashRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import {useState} from 'react'
import AddRoom from './components/AddRoom';
import Rooms from './components/Rooms';
import Room from './components/Room';


function App() {

  const [rooms,setRooms]=useState([])

  const addRoom =(n,c,t)=>{
        let temp = {
          name:n,
          color:c,
          type:t,
          products:[]

        }
        if(temp.name.length >= 5){
         alert('eror length of name')
         return false
        }
        if(temp.name.length === 0){
          alert('eror')
          return false
        }
      
setRooms([...rooms,temp])
    
  }


const addProduct =(index,typeOfProduct)=>{
let temp = {condition:false,type:typeOfProduct}
rooms[index].products.push(temp)
setRooms([...rooms])


}

const changeCondition = (indexOfRoom,indexOfProduct)=>{
rooms[indexOfRoom].products[indexOfProduct].condition= !rooms[indexOfRoom].products[indexOfProduct].condition
setRooms([...rooms])

}



  return (
    <div className="App">

<h1 style={{color:'blueviolet',fontSize:'50px'}} >Smart House</h1>
<hr></hr>
<HashRouter>
<Routes>

<Route path='/' element={<Rooms rooms={rooms} />}/>
<Route path='/addRoom' element={<AddRoom addRoom={addRoom}/>}/>



{/* לולאה שיוצרת לנו ערוצים עם השמות שלהם ומעבירה את הנתונים בפרופים */}
{rooms.map((val,index)=>{
  return <Route path={`room${val.name}`} element={<Room products={val.products} changeCondition={changeCondition}  addProduct={addProduct} index={index} name={val.name} type={val.type}/>}/>
})}

</Routes>
</HashRouter>


    </div>
  );
}

export default App;