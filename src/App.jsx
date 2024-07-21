import Navbar from './components/Navbar';
import Header from './layout/Header';
import MainContent from './layout/MainContent';
import Footer from './layout/Footer';
import Nosotros from './layout/Nosotros';
import Galeria from './layout/Galeria';
import MenuItem from './components/MenuItem';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Nosotros />
      <Galeria />
      <MainContent/>
      <Footer/>
    </>
  );
}

export default App
