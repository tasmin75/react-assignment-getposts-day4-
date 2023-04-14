import React,{useEffect,useState,createContext, Fragment} from 'react'
import GetData from './Components/GetData';
import './App.css';

export const MyContext=createContext();

const App = () => {
  const [data,setData]=useState([]);
  const [body,setBody]=useState([]);
  const[showBody,setShowBody]=useState(false);
  

  const API="https://jsonplaceholder.typicode.com/posts";

  async function fetchData(url){
    const res= await fetch(url);
    const data= await res.json();
    console.log(data);
    setData(data);
  }
useEffect(()=>{
  fetchData(API)
})

const handleShowBody=(id,title,body)=>{
  setBody({id,title,body});
  setShowBody(true);
}

  return (
    <Fragment>
    <h1 className='heading'>React Context API</h1>
    <div className="container">
     
      <div className="left_side">
      
        {data.map((item)=>(
          <p key={item.id}
          className='list'
          onClick={()=>handleShowBody(item.id,item.title,item.body)}
          >
            {item.title}
          </p>
        ))}
    
      </div>
      {showBody &&
      <div className="right_side">
         
          <MyContext.Provider value={body}>
            <GetData/>
          </MyContext.Provider>

      </div>
      }
    </div>
    </Fragment>
  )
}

export default App