import React from 'react';
import { animateScroll as scroll} from 'react-scroll'

const scrollToTop = () => {
  scroll.scrollToTop();
}

const Footer = () => {
  return (
    <footer>
    <div id='back-to-top_placeholder'>
      <i
        id="back-to-top"
        className="fas fa-arrow-alt-circle-up"
        onClick={scrollToTop}
      />
    </div>
    <ul className='footer-menu'>
      <li className = 'footer-menu-element'>
        About
      </li>
      <li className = 'footer-menu-element'>
        Contact Us
      </li>
      <li className = 'footer-menu-element last'>
        Disclaimer
      </li>
    </ul>
  </footer>
  );
}

export default Footer;
