import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/header/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import 'remixicon/fonts/remixicon.css';
import 'animate.css';

const App = () => (
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
