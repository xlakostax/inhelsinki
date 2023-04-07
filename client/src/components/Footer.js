import React from 'react';

window.onscroll = () => {
  showToTopButton();
}

const showToTopButton = () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

const Footer = () => {
  return (
    <footer>
    <div id='back-to-top_placeholder'>
      <i
        id="back-to-top"
        className="fas fa-arrow-alt-circle-up"
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
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
