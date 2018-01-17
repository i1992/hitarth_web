import React, { Component } from 'react';
import { ImgHover, WorkContainer, ImageLink, FlexRow, Title, StyledClickHereCircle, WorkContainerTwo } from './Work.style'
import  { Container, SocialContainer } from 'theme/grid'
import Fade from 'react-reveal/Fade';
import {
  RevealP,
} from './Home.style';
import styled from 'styled-components'

import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import Stepper from 'react-reveal/Stepper';
import SocialMedia from './components/SocialMedia'
import WhenInView from './components/WhenInView'
import Footer from './Footer'
import { RightP } from './About.style'



class Work extends Component {
  constructor(props) {
    super(props);
    this.step = new Stepper()
      .step('title-text', 200)
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
      <Title>
      <Flip x step={this.step.is('title-text')} >
        <h3> Twitter-User-Gender-Classification </h3>
      </Flip>


      <WorkContainer>

      <Bounce left duration={1000} step={this.step.is('title')}>
        <h1>01</h1>
      </Bounce>
      <div>
          <ImgHover>
            <img src={require('./assets/twitter_thumbnail.png')}
                alt="twitter" />
          </ImgHover>
        <FlexRow>
          <ImageLink href="https://www.google.com">
            Demo
          </ImageLink>
          <ImageLink href="https://github.com/i1992/Twitter-User-Gender-Classification">
            Source Code
          </ImageLink>
        </FlexRow>
        </div>
          <Fade duration={5000}>
            <p>
              • The goal of the project is to use machine learning to predict gender.<br/>
              • A pattern needs to be found from the existing data of the male and female Twitter users such as their tweets, profile description, and their profile color. The twitter provides the same sort of service to everyone.<br/>
              • The project tries to research in that direction and find or predict the gender of the user behind any tweet.<br/>
              • To develop this project we use Python and machine learning algorithm(scikit-learn).
            </p>
          </Fade>

      </WorkContainer>
      </Title>
      <Title>
        <Flip x step={this.step.is('title-text')} >
          <h3> A Book Tracking App </h3>
        </Flip>
      <WorkContainer>
        <WhenInView>
          {({ isInView })=>
            <RevealP hide={!isInView}>
              • The goal was to create a bookshelf app that allows you to select
                and categorize books you have read, currently reading and
                want to read with React.js<br/>
              • The goal was to create a bookshelf app that allows you to select
                and categorize books you have read, currently reading and
                want to read with React.js
            </RevealP>
        }
        </WhenInView>
        <div>
            <ImgHover>
              <img src={require('./assets/Bookshelf_thumbnail.png')}
                  alt="Bookshelf" />
            </ImgHover>
          <FlexRow>
            <ImageLink href="https://www.google.com">
              Demo
            </ImageLink>
            <ImageLink href="https://github.com/i1992/Udacity_book">
              Source Code
            </ImageLink>
          </FlexRow>
        </div>
        <Bounce right duration={1000} step={this.step.is('title')}>
          <h1>02</h1>
        </Bounce>
      </WorkContainer>
      </Title>
      <Title>
      <Flip x step={this.step.is('title-text')} >
        <h3> A Daily Meal-tracking App </h3>
      </Flip>
      <Fade duration={500}>
          <WorkContainer>
          <Bounce left duration={1000} step={this.step.is('title')}>
            <h1>03</h1>
          </Bounce>
          <div>
              <ImgHover>
                <img src={require('./assets/meal_thumbnail.png')}
                    alt="twitter" />
              </ImgHover>
            <FlexRow>
              <ImageLink href="https://www.google.com">
                Demo
              </ImageLink>
              <ImageLink href="https://github.com/i1992/meal-tracking-app">
                Source Code
              </ImageLink>
            </FlexRow>
          </div>
            <p>
              • Developed integrated react-redux framework for tracking meal
                weekly and recommend shopping list for that particular meal.<br/>
              • The goal was to create a Meal tracking app that allows you to select
                and categorize recipes and store ingredients in the shooping bucket.
            </p>
          </WorkContainer>
        </Fade>
        </Title>
        <Title>
        <Flip x step={this.step.is('title-text')} >
          <h3>StackChat</h3>
        </Flip>
        <WorkContainer>
          <p>
          <br/ >
            Technologies: Redux, React, AJAX, Socket IO, Node, Express, Webpack, Bootstrap, Postgresql<br />
            •  Stack-chat was build to understand concepts of redux library and how to use both react and redux for a single application.<br />
            •  Stack-chat is a real time chat application in which we can create a channel, post a message to a channel.<br />
            •  A user can have multiple channels, from which we can send/receive message to/from different channels.
          </p>
          <div>
              <ImgHover >
                <img src={require('./assets/chat_thumbnail.png')}
                    alt="twitter" />
              </ImgHover>
            <FlexRow>
              <ImageLink href="https://www.google.com">
                Demo
              </ImageLink>
              <ImageLink href="https://github.com/i1992/meal-tracking-app">
                Source Code
              </ImageLink>
            </FlexRow>
          </div>
          <Bounce left duration={1000} step={this.step.is('title')}>
            <h1>04</h1>
          </Bounce>
        </WorkContainer>
        </Title>

        <WorkContainerTwo>
        <RightP>
            <A href="https://github.com/i1992/">
              More Project click Here
            </A>
              <StyledClickHereCircle color='purple' />
          </RightP>
          </WorkContainerTwo>

      </Container>
      <Footer />
    </div>
    );
  }
}

const A = styled.a`
  text-decoration: none;
`;

export default Work;
