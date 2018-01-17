import React, { Component } from 'react';
import { Inputt, Buttonn, H3, GifImage } from './Cont.Style';


class Contact extends Component {
  render() {
    return (
          <GifImage>
              <H3 style={{ marginTop : "-150px", marginLeft : "350px" }}> Share With Me </H3>
              <Inputt  style={{ marginTop : "-50px", marginLeft : "100px" }} placeholder="Name" type="text" required="" />
              <Inputt style={{ marginTop : "-50px", marginLeft : "624px" }} placeholder="Email-Address" type="text" required="" />
              <Inputt style={{ marginTop : "100px", marginLeft : "350px" }} placeholder="Message" type="text" required="" />
              <Buttonn style={{ marginTop : "200px", marginLeft : "450px" }}>Send</Buttonn>
         </GifImage>

    );
  }
}

export default Contact;
