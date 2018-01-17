import styled, {css} from 'styled-components'

export const Image = styled.img`
  width : 100%;
`

export const GifImage = styled.div`
  height: 100vh;
  background-image: url('${require('./assets/fin.gif')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position : center;


  display: Flex;
  flex-direction : column;
  align-content: center;
  justify-content:center;

  text-align:center;
  color: white;

  font-size:2em;
  h1{
    margin-right: 400px;
    margin-bottom:0;
  }
  h2{
    margin-left:200px
  }
`

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: lightblue;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;
export const RevealPP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: lightblue;
    transform-origin: right;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;
