import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllReview from './Pages/Home/AllReview';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto px-12'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/reviews' element={<AllReview />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
