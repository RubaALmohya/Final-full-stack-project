import React from "react";
import Rating from "@mui/material/Rating";
import axios from "axios";
import styled from "styled-components";

function Rate() {
  let token = JSON.parse(localStorage.getItem("user"));
  const [value, setValue] = React.useState();

  const add_rating = () => {
    const url = `http://127.0.0.1:8000/profile_app/add_rating/`;
    axios
      .post(
        url,
        { rating: value },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <P1>Rate your experiance: </P1>
      <Rating
        size="large"
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <br></br>
      <BtnRate onClick={add_rating}> submit </BtnRate>
    </div>
  );
}

export default Rate;

const BtnRate = styled.button`
  font-family: "M PLUS Rounded 1c", sans-serif;
  margin-top: 15px;
  background-color: #264871;
  color: white;
  border: 2px solid transparent;
  text-decoration: none;
  padding: 2px 13px;
  border-radius: 30px;
  font-size: 17px;
  font-weight: bold;
  &:hover {
    background-color: transparent;
    border: 2px solid #264871;
    color: #264871;
    transition: 0.4s;
    cursor: pointer;
  }
`;
const P1 = styled.p`
  font-family: "M PLUS Rounded 1c", sans-serif;

  font-size: 23px;
`;
