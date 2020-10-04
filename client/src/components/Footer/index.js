import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./style.css";

const Footer = () => {

return ( 
    <MDBFooter color="mdb-color" className="font-small pt-1 mt-1">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Dhanya Kunhikrishnan</h6>
            <p>
            <a href="https://github.com/Dhanya-krishnan2"><i className="fab fa-github-square mr-3" /></a> Full Stack Web Developer
            </p>
            <p>
            <a href="https://www.linkedin.com/in/dhankrish/"><i className="fab fa-linkedin mr-3" /></a> Perth, WA, Australia
            </p>
            
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          
          <hr className="w-100 clearfix d-md-none" />
          
            
          
          <hr className="w-100 clearfix d-md-none" />
          
          
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="12" lg="12">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright {" "}
              <a href="https://github.com/Dhanya-krishnan2/full-stack-project3-using-mern-stack" className="title"> <b><em>Order Me</em></b></a>
            </p>
          </MDBCol>
        
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;