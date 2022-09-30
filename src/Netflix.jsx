
import React ,{  createContext, useState} from 'react'
import Header from './Header'
import Rows from './Rows'
import requests from './requests';

 
export let UserContext =   React.createContext()

   let theme = {
      backgroundColor : "white",
      color : "black"

   };
function Netflix(){

     let [state , setState] = useState(false)

     function Modes(){

      if(state === false){
         setState(true)
      }
      
      if(state === true ){
         setState(false)
      }
         
     }
     console.log(state)
   return(
    <>
    <UserContext.Provider  value = {{state , theme}} >
    <button onClick={Modes}   className='mode'>Modes</button>
    <Header endpoint = {requests.fetchTrending } />
    <Rows title ="Trending"  endpoint = {requests.fetchTrending }/>
    <Rows title ="NetflixOriginals"  endpoint = {requests.fetchNetflixOriginals}/>
    <Rows title ="TopRated"  endpoint = {requests.fetchTopRated}/>
    <Rows title ="ActionMovies"  endpoint = {requests.fetchActionMovies}/>
    <Rows title ="ComedyMovies"  endpoint = {requests.fetchComedyMovies}/>
    <Rows title ="HorrorMovies"  endpoint = {requests.fetchHorrorMovies}/>
    <Rows title ="RomanceMovies"  endpoint = {requests.fetchRomanceMovies}/>
    <Rows title ="Documentaries"  endpoint = {requests.fetchDocumentaries}/>
    </UserContext.Provider>
    </>
   )
    
}

export default Netflix