import styled from 'styled-components'
import ClickHereCircle from './components/ClickHereCircle/ClickHereCircle'



export const FlexRow = styled.div`
  display: Flex;
  flex-direction : row;
  align-items: center;
  justify-content : center;
`

export const Title = styled.div`
  margin-top : 90px;
  align-item : center;
  margin-bottom : 200px;

  h3{
    text-align : center;
  };

`;
export const WorkContainerTwo = styled.div`
  display: Flex;
  width: 99%;
  height: 0;
  position:relative;
  padding-bottom: 10%;
  margin-top:100px;

`;

export const WorkContainer = styled.div`
  display: Flex;
  flex-direction : row;
  margin-top: 5px;
`;

export const ImageLink = styled.a`

  margin-top: 0px;
  margin-right : 20px
`

export const ImgHover = styled.div`
  overflow : hidden;
  display : inline-block;

  & > img {
    transition : transform .3s;
    margin-top : 30px

  }

  &:hover {
    & > img {
      transform : scale(1.3)
    }
}
`

export const Index = styled.div`
  position : absolute;
  left : 0;
  bottom : 0 ;
  z-index: -1;

  h1{
    font-size: 4em;
    margin : 0 ;
    font-weight: bold:
    color: blue;
    opacity : 0.5
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
