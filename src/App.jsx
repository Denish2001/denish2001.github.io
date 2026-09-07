// App.jsx
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Work from './components/Work/Work';
import Publications from './components/Publications/Publications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Magazine from './components/Magazine/Magazine'
import './App.css';

function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/work" element={<Work />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/magazine" element={<Magazine />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;