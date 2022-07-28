import  { useState } from 'react';
import { useEffect } from 'react';

const FatchData = () => {
    const [info,setInfo] = useState([])
    useEffect(()=>{
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
        .then((res) => res.json())
        .then((data) => {
        
          setInfo(data)
        })
    },[])
    return [info]
};

export default FatchData;