import React from 'react'
import { useEffect } from "react";

function TakePic() {
  useEffect (() =>{
    axios.get("http://127.0.0.1:8000/mood_app/take_photo/",
    {headers:{"Authorization" : `Bearer ${token}`}})
    .then((res)=>{

      console.log(res.data)
      // setData(res.data.fav)

    }).catch((err)=>{
        console.log(err)
    })
},[]);
  return (
    <div>TakePic</div>
  )
}

export default TakePic