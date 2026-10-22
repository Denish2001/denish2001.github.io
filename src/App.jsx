// App.jsx
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Motivation from './components/Motivation/Motivation';
import Work from './components/Work/Work';
import Publications from './components/Publications/Publications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Magazine from './components/Magazine/Magazine';
import SafeMom from './components/SafeMom/SafeMom';
import Blog from './components/Blog/Blog';
import BesidesWork from './components/BesidesWork/BesidesWork';
import './App.css';

/**
 * Home page — Hero + Motivation together on "/".
 * Keeping them in one element avoids routing overhead
 * and keeps the scroll experience continuous.
 */
function Home() {
  return (
    <>
      <Hero />
      <Motivation />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/safemom" element={<SafeMom />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/besidework" element={<BesidesWork />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
