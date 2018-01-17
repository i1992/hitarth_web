import styled from 'styled-components'
import { Link } from 'react-router'

export const NavContainer = styled.div`
  display: Flex;
  flex-direction : row;
  position : fixed;
  z-index : 99;
  background-color : white;
  width : 100%;
  height: 50px;
  padding-left : 450px;
`;

export const DivContainer = styled.div`
  width:450px;
  heigth:30px;
  padding-top:13px;
`

export const FooterContainer = styled.div`
  display: Flex;
  flex-direction : column;
  position : fixed;



`;
export const NavItem = styled(Link)`

  margin-right : 20px;
  text-align : center;
  font-size : 0.8em;
  color : lightblue;
  font-weight: bold;
  cursor : pointer;
  position : relative;

  text-decoration:  none;
  &:hover {
    color : #e59213;
  }
`;
