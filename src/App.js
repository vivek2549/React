import logo from './logo.svg';
import './App.css';
import About from './page/About';
import Contect from './page/Contect';
import Footer from './page/Footer';
import Header from './page/Header';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <About/>
    <Contect/>
    <Footer/>
    <Header/>
    </>
  );
}

export default App;
