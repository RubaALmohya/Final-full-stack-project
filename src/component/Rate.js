import React from "react";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function Rate() {
  const [value, setValue] = React.useState();
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
    </div>
  );
}

export default Rate;
