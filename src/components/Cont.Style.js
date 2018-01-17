import styled from 'styled-components'



export const Inputt = styled.input`

    width: 300px;
    display: Flex;
    border: none;
    position : absolute;
    font-size: 20px;
    padding: 10px 0;
    border-bottom: solid 1px blue;
    background: linear-gradient(to bottom, rgba(255,255,255,0) 96%, lightblue 4%);
    background-repeat: no-repeat;
    color: darken(blue, 20%);
    &:focus, &:valid {
    box-shadow: none;
    outline: none;
    background-position: 0 0;
  }
`;

export const H3 = styled.h3`
  position : absolute;
  font-size : 40px;

`;

export const GifImage = styled.div`

  height  :80vh;
  background-image: url('${require('../assets/cc.jpg')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position : center;


  display: Flex;
  flex-direction : column;
  align-content: center;
  justify-content:center;

  text-align:center;
  color: gray;

  font-size:2em;


  `;
export const Buttonn = styled.button`

  background-color: #0340a3;
  border: none;
  color: white;
  position : absolute;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }
`;
