import React from 'react';

import { Wrapper, Background, Logo } from "../styles/Header";

const Header = () => {
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let number = randomNumber(1, 7);

  const changeBackground = {
    backgroundImage: `url('media/bg${number}.jpg`
  }

  return (
      <Wrapper >
        <Background style = {changeBackground}></Background>
        <Logo>
          <h1><span>in</span>Helsinki</h1>
          <p>Essential City Guide</p>
        </Logo>
      </Wrapper>
  );
}

export default Header;
