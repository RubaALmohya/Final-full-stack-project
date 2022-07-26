import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { MdFavorite } from "react-icons/md";
import styled from "styled-components";

const ShowContent = () => {
  return (
    <>
      <MDBRow className="justify-content-md-center">
        <MDBCol>
          <img
            src="https://i.chzbgr.com/full/9591928832/h8AC54339/laptop-writing-whole-project-as-student-gim-writing-10-lines-code-as-salaried-enough-today"
            className="img-thumbnail"
            alt="..."
            style={{ maxWidth: "24rem" }}
          />
          <MDBCol style={{ paddingTop: "50px" }}>
            <MDBBtn
              className="text-dark"
              color="light"
              style={{ fontSize: "20px", width: "120px" }}
            >
              Next
            </MDBBtn>

            <MDBBtn
              className="text-dark"
              color="light"
              style={{ marginLeft: "50px", width: "120px" }}
            >
              <MdFavorite size={30} color={"#0b0b25"} />
            </MDBBtn>
          </MDBCol>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default ShowContent;
