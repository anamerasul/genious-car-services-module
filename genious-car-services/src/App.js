
import { Route, Routes } from 'react-router';
import './App.css';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Services></Services>}></Route>

      </Routes>
      <Footer></Footer>

    </div>



  );
}

export default App;
