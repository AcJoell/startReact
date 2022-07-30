import {useState, useEffect} from 'react';
import GetGifs from '../services/GetGifs';
import Gif from './Gif';

const ListOfGifs = ({params}) => {

  const {keyword} = params

  const [loading, setLoading] = useState();


  const [gifs, setGifs] = useState([])
  useEffect(()=>{
    setLoading(true)
    GetGifs({ keyword})
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword]) 

  if(loading) return <div className="spinner"></div>


  return (
    <>
    {
      gifs.map(({id, title, url}) => {
          return (
            <Gif 
              id={id}
              key={id}
              title={title}
              url={url}
            />
          )
        })
      }
    </>
  )
}

export default ListOfGifs;