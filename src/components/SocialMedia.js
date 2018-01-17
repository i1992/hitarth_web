import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { facebook2 } from 'react-icons-kit/icomoon/facebook2';
import { github } from 'react-icons-kit/icomoon/github';
import { linkedin } from 'react-icons-kit/icomoon/linkedin';

const Iconn = styled(Icon)`
  transform: rotate(90deg);
  color : #767879;
`;

const AA = styled.a`
  padding : 15px;
`;

const Container = styled.div`
  display: Flex;
  flex-direction : column;
  align-content: center;
  transform: rotate(-90deg);
  transform-origin: left top;
  font-size: 0.6em;

`


class SocialMedia extends Component {
  render() {

    return (

      <Container>
        <div>
          <AA
            target="_blank"
            href="https://www.facebook.com/hitarth92">
            <Iconn icon={facebook2} />
          </AA>

          <AA
            target="_blank"
            href="https://github.com/i1992">
            <Iconn icon={github} />
          </AA>

          <AA
            target="_blank"
            href="https://www.linkedin.com/in/hitarth92/">
            <Iconn icon={linkedin} />
          </AA>
          <p>FOLLOW HITARTH</p>
        </div>
      </Container>
    );
  }
}

export default SocialMedia
