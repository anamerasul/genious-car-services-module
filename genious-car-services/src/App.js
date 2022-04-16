
import { Route, Routes } from 'react-router';
import './App.css';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>

      </Routes>
      <Footer></Footer>

    </div>



  );
}

export default App;
