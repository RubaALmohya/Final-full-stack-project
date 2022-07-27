import React from "react";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import axios from "axios";


function Rate() {
  let token = JSON.parse(localStorage.getItem('user'));
  const [value, setValue] = React.useState();


  const add_rating = () => {
    const url =`http://127.0.0.1:8000/profile_app/add_rating/`;
    axios.post(url,{'rating':value},
    {headers:{"Authorization" : `Bearer ${token}`}})
  .then((res)=>{
  }).catch((err)=>{
      console.log(err)
  })
  //  window.location.reload()
  }

  return (
    <div>
      <Typography component="legend">Rate your experiance: </Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <button onClick={add_rating}> submit </button>
    </div>
  );
}

export default Rate;
