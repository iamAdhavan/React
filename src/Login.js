import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6";
import SimpleSlider from './components/SimpleSlider';
import Dashboard from './Dashboard';


function Login() {

  const arr = [1,2,3]

  console.log(arr)

  const duplicate = [...arr]

  console.log(duplicate,"duplicate");

  return (
    <div>
      Login

      
      <Dashboard name="Lingesh" age="20"/>
    </div>

   

    
  );
}

export default Login;