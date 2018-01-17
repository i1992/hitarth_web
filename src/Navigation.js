import React, { Component } from 'react';
import { NavContainer, NavItem, DivContainer } from './Navigation.style'

class Navigation extends Component {
  render() {
    return (

        <NavContainer>
          <DivContainer>
            <NavItem to='/'>HOME</NavItem>
            <NavItem to = '/work'>WORK</NavItem>
            <NavItem to = '/about-us'>ABOUT ME</NavItem>
          </DivContainer>
        </NavContainer>

    );
  }
}

export default Navigation;
