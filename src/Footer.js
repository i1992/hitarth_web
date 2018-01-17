import React, { Component } from 'react';
import styled from 'styled-components'

const FooterImage = styled.img`
    width : 100%;
    height :350px;
    opacity : 0.3;
    position:relative;

`;
const Div =styled.div`
  position: relative;
`;

const H1 = styled.h2`
  position: absolute;
  top: 40%;
  left: 30%;
`;

const H = styled.p`
  position: absolute;
  top: 313px;
  left: 500px;
  font-size : 0.7em;
`;


class Contact extends Component {
  render() {
    return (

    <footer>
      <Div>
        <FooterImage src={require("assets/footerr_c.jpg")} />
        <H1>"Wherever Yo go <br/> Go with all your heart."</H1>
        <H>Powered by Hitarth Shah @2018 </H>
      </Div>
    </footer>

    );
  }
}

export default Contact;
