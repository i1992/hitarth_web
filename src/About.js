import React, { Component } from 'react';
import classnme from 'classnames'
import  { Container } from 'theme/grid'
import { TD, TDD, HparHeight, ParHeight, RightP, StyledClickHereCircle, FourContainer, WorkContainer, FifthContainer, YoutubeContainerTwo, Index, SecondContainer, Immg, ThirdContainer, YoutubeContainer } from './About.style'
import ImageParallx from 'react-image-parallax2'
import YouTube from 'react-youtube'
import Bounce from 'react-reveal/Bounce';
import Stepper from 'react-reveal/Stepper';
import WhenInView from './components/WhenInView'
import Contact from './components/Contact'

const opts = {
      height: '260',
      width: '340',

    };

class About extends Component {
  constructor(props) {
    super(props);
    this.step = new Stepper()
      .step('title-youtube', 200)
    ;
    this.state = {
      step : 1,
    }
    this.addIncrement = this.addIncrement.bind(this)
  };

  addIncrement(){
    let stepp = 1 + this.state.step;
    this.setState({step : stepp});
  }

  _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  render() {

    const { step } = this.state ;
    console.log(step)
    return (
      <div>
      <Container>
        <h3>About Us</h3>
        <h4> Hi There! </h4>
        <HparHeight> My Name is Hitarth Shah. I am from INDIA. You are here means that you want to get to know me.

            So Lets start with, Call me Shah. I know Hitarth is too difficult to pronounce.
        </HparHeight>

          <WorkContainer>
          <RightP
              className={classnme({ unanswered : step === 1 })}
              onClick={this.addIncrement}
            >
              <span>
                Hi Shah,<br/>
                Nice to meet you, Im curious, what is your favorite sports?
              </span>
              { step === 1 &&
                <StyledClickHereCircle color='purple' />
              }
            </RightP>
            </WorkContainer>

        {
          step >= 2 &&
              <SecondContainer>
                <Immg>
                  <ImageParallx
                    reduceHeight={1/3}
                    style = {{opacity : '0.5'}}
                    src={require("assets/barca.jpg")} alt="barca"

                    />
                  <h1>Yes, my favorite sport is soccer. And My Fevorite player Andrés Iniesta.</h1>
                </Immg>
                <WorkContainer>
                <RightP
                    className={classnme({ unanswered : step === 2 })}
                    onClick={this.addIncrement}
                  >
                    <span>
                      OK<br/>
                      ...Tell me more??
                    </span>
                    { step === 2 &&
                      <StyledClickHereCircle color='purple' />
                    }
                  </RightP>
                  </WorkContainer>
               </SecondContainer>
        }
        {
          step >= 3 &&
          <ThirdContainer>
            <ParHeight>Absolutely, I love Youtube. In fact, 60% of things I’ve learnt so far are from
                Youtube.
                In Fun time i watch Ultra music festival. My favorite artsit is Martin Garrix.
                Here some my youtube, which I frequnetly watch.
            </ParHeight>
          <WhenInView>
          {({ isInView })=>
            <YoutubeContainer hide={!isInView}>
              <Bounce right duration={1000} step={this.step.is('title-youtube')}>
                <Index>
                  <h1>01</h1>

              </Index>
              <YouTube
                videoId="o7iL2KzDh38"
                opts={opts}
              />
              </Bounce>
            </YoutubeContainer>
          }
          </WhenInView>
          <YoutubeContainerTwo>
          <Bounce left duration={1000} step={this.step.is('title-youtube')}>
            <Index>
              <h1>02</h1>
            </Index>
            <YouTube
              videoId="g_s17HMFaug"
              opts={opts}
            />
          </Bounce>
        </YoutubeContainerTwo>
        <WorkContainer>
        <RightP
            className={classnme({ unanswered : step === 3 })}
            onClick={this.addIncrement}
          >
            <span>
              OK Shah <br/>
              ...Can you tell me your professional skills?
            </span>
            { step === 3 &&
              <StyledClickHereCircle color='purple' />
            }
          </RightP>
          </WorkContainer>
        </ThirdContainer>
        }
        {
          step >= 4 &&
          <FourContainer>
             <ParHeight>I loved designing. The design is Thinking made Visual to me.
                I used React.JS, HTML5, CSS3 and pure javascript to create Creative web Application. I made visual applying design template using adobe photoshop.
                Also, I have Implemented mobile application, called Fitness track Application. This Application was cross-platform.
             </ParHeight>
             <div>
              <table>
                <tr>
                  <TD>
                    <img src={require("assets/react-3.png")} alt="react-3.png"/>
                  </TD>
                  <TD >
                    <img src={require("assets/javas.jpeg")} alt="javas.jpeg"/>
                  </TD>
                  <TD >
                    <img src={require("assets/HTML5.png")} alt="HTML5.png"/>
                  </TD>
                </tr>
                <tr>
                  <TDD>
                    <img src={require("assets/css.png")} alt="css.png"/>
                  </TDD>
                  <TDD >
                    <img src={require("assets/mongo.jpeg")} alt="mongo.jpeg"/>
                  </TDD>
                </tr>
               </table>
            </div>
            <WorkContainer>
            <RightP
                className={classnme({ unanswered : step === 4 })}
                onClick={this.addIncrement}
              >
                <span>
                  Sound Interesting <br/>
                  ...Is there any way to reach you?
                </span>
                { step === 4 &&
                  <StyledClickHereCircle color='purple' />
                }
              </RightP>
              </WorkContainer>
          </FourContainer>
        }
        {
          step >= 5 &&
          <FifthContainer>
            <Contact />
          </FifthContainer>
        }

      </Container>
      </div>
    );
  }
}


export default About;
