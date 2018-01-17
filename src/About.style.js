import styled from 'styled-components'
import ClickHereCircle from './components/ClickHereCircle/ClickHereCircle'



export const TD = styled.td`
  padding-right:200px;
`;
export const TDD = styled.td`
  padding-left:200px;
  padding-top: 60px;
`;

export const HparHeight = styled.h5`
  line-height: 1.6;
`;

export const ParHeight = styled.p`
  line-height: 1.2;
`;

export const RightP = styled.div`
  margin-bottom: 2em;
  text-align: right;
  width: 60vw;
  margin-right: 0;
  margin-left: auto;

  color: blue;
  & > span {
    display: inline-block;
    position: relative;
    overflow: hidden;
    transition: 1s transform;
    &::after {
      content: ' ';
      background-color: blue;
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      transition: 1s width;
    }
  }


  &.unanswered {
    cursor: pointer;
    opacity: 0.5;

  }

  &.unanswered:hover {

    opacity: 1;
  }
`;

export const WorkContainer = styled.div`
  display: Flex;
  width: 99%;
  height: 0;
  position:relative;
  padding-bottom: 10%;
  margin-top:100px;

`;

export const SecondContainer = styled.div`

  margin-left : 10px;
  width: 100%;
  height: 300px;
  padding-bottom: 15%;

`;
export const FourContainer = styled.div`

  margin-left : 10px;
  width: 100%;
`;
export const FifthContainer = styled.div`
  margin-left : 10px;
  width: 100%;
  height: 300px;
  padding-bottom: 15%;
`;
export const ThirdContainer = styled.div`

  margin-left : 10px;
  width: 100%;
  height: 300px;
  margin-top:150px;
  padding-bottom: 55%;

  p {
    line-height:1.2
  }

`;

export const Index = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
  font-size: 2em;
  h1 {
    margin: 0;
    font-weight: bold;
    color: Blue;
    opacity: 0.5;
    margin-left : 330px;
    margin-bottom: 200px;
    transform: translateY(20%);
  }
`;

export const YoutubeContainer = styled.div`
  position : relative;
  margin-left : 600px;


`;
export const YoutubeContainerTwo = styled.div`
  position : relative;



`;


export const Immg = styled.div`
  position: relative;
  background-color : black;
  margin-bottom : 40px;

  h1{
    position: absolute;
    top : 50%;
    text-align: left;
    color : white;
    margin-left : 400px;
    transform: translate(-50%, -50%);
  }

`;
export const StyledClickHereCircle = styled(ClickHereCircle)`
  position: absolute;
  right: 0;
  top: 0;

  margin-right: 0;
  margin-left: auto;
  transform: translate(0, -30%);
`;
