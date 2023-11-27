import React from 'react';
import './App.css';
import {useState} from 'react';
import Container from './Data.jsx';
import list from './list.jsx';



function App() {
  document.title="Shopping Cart"
 
  const [state,setstate] =useState(0)
  const [top,settop] = useState()
  
  return (
    <div className="content">
      <div className="nav">
        
        <div className="cart">
          <p>🛒 <span>{state}</span></p>
        </div>
      </div>
      <div className="header">
        <h1>SAMSUNG MOBILE ONLINE SHOPPING</h1>  
        <p>FLASH SALE</p>
      </div>
      <div className='cards'>
        {list?.map((val)=>(<Container key={val.id}
        img={val.img}
        
        name={val.title}
        price={val.price}
        discription={val.discription}
        setstate={setstate}
        state={state}
        top={top}
        settop={settop}/>))}
      </div>
    </div>)

} 
export default App



