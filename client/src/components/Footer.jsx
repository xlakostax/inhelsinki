import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {Container, Menu, Element, Button} from '../styles/Footer'

window.onscroll = () => {
  showToTopButton();
}

const showToTopButton = () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("icon").style.display = "block";
  } else {
    document.getElementById("icon").style.display = "none";
  }
}

const Footer = () => {
  return (
    <Container>
    <Button>
      <FontAwesomeIcon 
        icon="fa-solid fa-circle-up"
        id="icon"
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      />
    </Button>
    <Menu className='footer-menu'>
      <Element>
        About
      </Element>
      <Element>
        Contact Us
      </Element>
      <Element>
        Disclaimer
      </Element>
    </Menu>
  </Container>
  );
}

export default Footer;
