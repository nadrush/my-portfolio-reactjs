import Footer from './components/Footer';
import './App.css';
import BgImage from './assets/images/bg.jpg';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      {/* <div className="bg"></div> */}
      <div style={{ backgroundImage: `url(${BgImage})` }}>test</div>
      <Footer />
    </>
  );
}

export default App;
