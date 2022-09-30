import React ,{useState} from 'react'
import axios from 'axios'
import requests from './requests'
import { UserContext } from './Netflix';

function Navbar() {
  const value = React.useContext(UserContext);
  console.log(value)
  let theme;

  if(value.state){
     theme = value.theme
  }
  
  
  

  return (
    <div style={theme} className='nav' >
        <a href=""><img src="./NetflixLogo.png" alt="" /></a>
        <form action="">
        <input type="text" />
        <input type="Submit"  value="submit" />
      </form>
        <a href=""><img src="user.jpg" alt="" /></a>
    </div>
  )
}

export default Navbar