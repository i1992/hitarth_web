import React, { Component } from 'react';
import  { Container, SocialContainer } from 'theme/grid'
import {
  GifImage,
  RevealP,
} from './Home.style'
import Bounce from 'react-reveal/Bounce';
import Stepper from 'react-reveal/Stepper';
import WhenInView from './components/WhenInView'
import SocialMedia from './components/SocialMedia'
import Footer from './Footer'



class App extends Component {
  constructor(props) {
    super(props);
    this.step = new Stepper()
      .step('title', 200)
    ;
  }
  render() {
    return (
      <div>
        <SocialContainer>
          <SocialMedia />
        </SocialContainer>
        <Container>
          <GifImage>
            <Bounce left duration={1000} step={this.step.is('title')}>
              <h1>Hitarth Shah </h1>
            </Bounce>

            <Bounce right duration={2000} step={this.step.is('title')}>
              <h2>Front-End-Developer</h2>
            </Bounce>
          </GifImage>
          <WhenInView>
            {({ isInView })=>
              <RevealP hide={!isInView}>
                My current graduate degree is in Computer Science, I have also received interdisciplinary training in ReactJS via Udacity
                nanodegree. Additionally, I have academic and professional experience in NodeJS and AngularJS. Also, I have the experience
                to create an artistic web app using Adobe tools such as Adobe Muse, Photoshop and for the animation part after effects.
                Perhaps more important, than my ability to perform, is that I possess the technical expertise, knowledge, and tenacity
                needed to independently learn, troubleshoot, and develop new techniques.All this component assistant to build a Powerful
                web application, mobile application, and creative user interface.
              </RevealP>
          }
          </WhenInView>

        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
