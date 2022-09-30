import React from 'react'
import axios from 'axios'
import { useState  , useEffect} from 'react';
import { UserContext } from './Netflix';

function Rows(props) {
  
  const value = React.useContext(UserContext); 

  let theme;

  if(value.state){
     theme = value.theme
  }

  
  

  const img_base_path = "https://image.tmdb.org/t/p/original";
  const base_url = "https://api.themoviedb.org/3";
  let [url , geturl] = useState([]);

useEffect(() => {

    async  function togeturl(){
      let fullurl = await axios.get(`${base_url}${props.endpoint}`)
       let finalpath = fullurl.data.results;
       geturl(finalpath)
     }
     togeturl()
    
}, [])
// console.log(url)



  function Movies(){
    return url.map((items , index)=>{
     return (
      <div style={theme} className='Moviebox'>
      <img className='img' style={{width:"100px"}} src={`${img_base_path}${items.poster_path}`} alt="" />
      <h4>{items.name || items.original_title}</h4>
      <button onClick={ ((items) =>{console.log(items)})}>Play trailer</button>
      {/* <p>{items.overview}</p> */}
      </div>
     )
    })
  }
  
  return (
    <div style={theme} >
    <h1 id='title'>{props.title}</h1>
   <div className='movies' >
   <Movies />
    
   </div>
    </div>

  )
}


export default Rows 
