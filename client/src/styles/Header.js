import styled from 'styled-components';

export const Wrapper = styled.header`
  grid-area: header;
  display: block;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: -999;
`;

export const Background = styled.div`
  height: 30vh;
  background-position: left bottom;
  background: no-repeat;
  background-size: cover;
  filter: brightness(0.5);
`;

export const Logo = styled.div`
  position: absolute;
  top: 2rem;
  width: 100%;
  height: 0;
  & h1 {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    color: white;
    text-indent: 2rem;
    & span {
      color: #b4c92b;
      text-transform: lowercase;
    }
  }
  & p {
    font-family: 'Hind', serif;
    font-weight: 600;
    text-indent: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.08rem;
    color: white;
  }
`;