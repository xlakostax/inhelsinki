import styled from "styled-components"

export const Container = styled.footer`
position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #292929;
`;

export const Menu = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  justify-content: flex-start;
  color: #fff;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Element = styled.li`
  display: block;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
  padding-left: 1em;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
`;

export const Button = styled.div`
  height: 0;
  & #icon {
    display: none;
    position: fixed;
    bottom: 70px; 
    right: 30px; 
    z-index: 99;
    color: #292929;
    font-size: 2em;
  }
`;
