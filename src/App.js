import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { BrowserRouter as Routes, Route} from 'react-router-dom'
import './App.css'
// import BgImage from './assets/images/bg.jpg'

function App() {
  return (
    <Routes>
      <Navbar/>
      <Route path='/' exact render={ () => (
        <>
        <h2>Alooooooooooo</h2>
        </>  
      )}
      />
      
    </Routes>
  );
}

export default App;
