import React from "react";
import Rating from '@mui/material/Rating';

function RateReadOnly() {
  return (
    <div>

<Rating name="read-only" value={value} readOnly />

    </div>
  )
}

export default RateReadOnly