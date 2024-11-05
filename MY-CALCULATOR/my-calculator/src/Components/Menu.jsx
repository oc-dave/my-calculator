import React from 'react';

const Menu = ({ showMenu, toggleMenu }) => (
  <div className={`menu ${showMenu ? 'hide' : ''}`}>
    <small className="goBack" onClick={toggleMenu}>
      {'◄ back to calculator'}
    </small>
    <section>
      <h6>Spread the Word!</h6>
      <p>
        Hi there! If you find this <strong>calcoolator</strong> useful, 
        <a
          className="item"
          href="https://github.com/OC-DAVE/the-calcoolator"
          rel="noopener noreferrer"
          target="_blank"
          title="Check out on GitHub"
        >
          {' check it out on GitHub'}
        </a> 
        and share it with your friends!
      </p>
      <p>Any feedback is welcome.</p>
      <p>Thanks for your support,</p>
      <p>
        <a
          href="https://github.com/OC-DAVE"
          target="_blank"
          rel="noopener noreferrer"
          title="About OC-DAVE"
        >
          OC-DAVE
        </a>
      </p>
    </section>
  </div>
);

export default Menu;

// Credits: This code was created by OC-DAVE.
