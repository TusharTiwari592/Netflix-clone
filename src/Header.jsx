import React ,{useState , useEffect , useContext} from 'react'
import axios from 'axios'
import Navbar from './Navbar'; 



function Header(props) {
    
  
  
  
  let [Randomposter , setrandomposters] = useState([])
  const img_base_path = "https://image.tmdb.org/t/p/original";
  const base_url = "https://api.themoviedb.org/3";
  useEffect(() => {
    
    async  function getrandomposters(){
      let Random = await axios.get(`${base_url}${props.endpoint}`)
      let  randomArr = Random.data.results[Math.floor(Math.random()*Random.data.results.length)]
      setrandomposters(randomArr)
    }
     getrandomposters()
    }, [])
  
  const styles = {
    backgroundImage: `url(${img_base_path}${Randomposter.backdrop_path})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  
  let over = '';
  if(Randomposter.overview){
    if(Randomposter.overview.length > 200){
      over = Randomposter.overview.slice(0,200) + '...'
    }
    else
    over = Randomposter.overview;
  }
  
  
  
  return (
    <div >
      
    
    <div className="header" style={styles}  >
      <Navbar />
      <div className='headercontent'>
      <h1>{Randomposter.name || Randomposter.original_title}</h1>
      <div className='buttons'>
      <a href="">Play</a>
      <a href="">Mylist</a>
      </div>
      {/* <p>{Randomposter.overview && (Randomposter.overview.slice(0,500)  +'...')}</p> */}
      <p>{over}</p>
      </div>
    </div>
    </div>
  )
}

export default Header