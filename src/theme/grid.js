import styled from 'styled-components';
import media from '../theme/media'


export const Container = styled.div`
  padding-left : 120px;
  padding-right : 120px;
  padding-top : 50px;
  ${media.phone`
      padding-left : 10px;
      padding-right : 10px;
      padding-top : 15px;
    `}
`;

export const SocialContainer = styled.div`
    bottom : 10px;
    left: 40px;
    position : fixed;
`;


export const Relative = styled.div`
  position : relative;
`
