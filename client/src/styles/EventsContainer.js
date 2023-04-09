import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
    display: -ms-grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(350px, 350px));
  column-gap: 15px;
  row-gap: 15px;
  min-height: 100vh;
  background-color: #fff;
  padding-top: 1rem; padding-bottom: 1rem;
`; 