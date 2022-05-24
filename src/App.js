import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import AllReview from './Pages/Home/AllReview';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import PurchaseDetail from './Pages/Purchase/PurchaseDetail';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './Pages/Shared/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Portfolio from './Pages/Portfolio/Portfolio';
import AllProduct from './Pages/Purchase/AllProduct';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto px-12'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='blog' element={<Blog />}></Route>
          <Route path='review' element={<AllReview />}></Route>
          <Route path='product/:productId' element={
            <RequireAuth>
              <PurchaseDetail />
            </RequireAuth>
          }></Route>
          <Route path='products' element={
            <RequireAuth>
              <AllProduct />
            </RequireAuth>
          }></Route>
          <Route path='dashboard' element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }>
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path='addReview' element={<AddReview></AddReview>}></Route>
            <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          </Route>
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
