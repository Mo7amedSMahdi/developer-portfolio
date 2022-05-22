import React from 'react';
import './home.css';
import Container from '@mui/material/Container';
import code1 from '../../assets/images/code-snippet-1.png';
import code2 from '../../assets/images/code-snippet-2.png';
import code3 from '../../assets/images/code-snippet-3.png';
import code4 from '../../assets/images/code-snippet-4.png';
import code5 from '../../assets/images/code-snippet-5.png';

const Home = () => (
  <section className="home">
    <Container className="container flex flex--column">
      <div className="home-about flex flex--column">
        <div className="about-title flex flex--column">
          <p className="animate__animated animate__fadeInUp">Hi all, I am</p>
          <h1 className="animate__animated animate__fadeInUp">Mohammed Salah</h1>
          <p className="animate__animated animate__fadeInUp">&#62; Front-end developer</p>
        </div>
        <div className="about-content flex flex--column">
          <p className="animate__animated animate__fadeInUp">&#47;&#47; complete the game to continue</p>
          <p className="animate__animated animate__fadeInUp">&#47;&#47; find my profile on Github:</p>
          <p className="animate__animated animate__fadeInUp">
            <span className="sp-blue">const</span>{' '}
            <span span className="sp-green">
              githubLink
            </span>{' '}
            ={' '}
            <span span className="sp-rajah">
              “https://github.com/Mo7amedSMahdi”
            </span>
          </p>
        </div>
      </div>
      <div className="home-code animate__animated animate__fadeInUp">
        <img src={code1} alt="code snippet" />
        <img src={code2} alt="code snippet" />
        <img src={code3} alt="code snippet" />
        <img src={code4} alt="code snippet" />
        <img src={code5} alt="code snippet" />
      </div>
    </Container>
  </section>
);

export default Home;
