import logo from './logo.svg';
import './App.css';
import About from './page/About';
import Contect from './page/Contect';
import Footer from './page/Footer';
import Header from './page/Header';
import Home from './page/Home';
import Search from './page/Search';

function App() {
  return (
    <>
    {/* <Header/> */}
    <Home/>
    <Search/>
    <About/>
    <Contect/>
    <Footer/>
    </>
  );
}

export default App;
