import React,{useContext} from 'react'
import {MyContext} from '../App'
import '../App.css'


const GetData = () => {
  const data=useContext(MyContext);
  console.log(data);
  return (
    <div className='content-body'>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}
export default GetData