import React, {useState} from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import {FaThumbsDown} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IconName } from "react-icons/sl";


function Login() {

    const [count , setCount] = useState(0)

    const handleIncrement = () =>{
        setCount(count+1)
    }

    const handledrecrement = () =>{
        setCount(count-1)
    }
  return (
    <div>

        <h1> updates </h1>

        <label>Count : {count}</label><br/>

        <FaThumbsUp onClick={handleIncrement} />
        <FaThumbsDown onClick={handledrecrement} />


    
    </div>
  )
}

export default Login