import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #000000;
  margin-bottom: 15px;
  padding: 20px 25px;
  @media all and (min-device-width: 280px) and (max-device-width: 500px) {
    margin: 0;
  }
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const Heading = styled.h4`
  margin-top: 1em;
  font-family: "Hind"; 
`;

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1em;
  font-family: "Hind";
`;
