import React from 'react';
import './footer.css';

const Footer = () => (
  <footer>
    <p>find me in:</p>
    <div className="social-links">
      <ul>
        <li>
          <a href="https://twitter.com/devMo7amed">
            <i className="ri-twitter-fill " />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mohamedsmahdi/">
            <i className="ri-linkedin-fill " />
          </a>
        </li>
      </ul>
      <a href="https://github.com/Mo7amedSMahdi/">
        <p>@Mo7amedSMahdi</p>
        <i className="ri-github-fill " />
      </a>
    </div>
  </footer>
);

export default Footer;
