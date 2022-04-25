
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Experts from './Pages/Home/Experts/Experts';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import { ToastContainer } from 'react-toastify';
import Order from './Pages/Home/Order/Order';

function App() {
  return (
    <div className="">
      <Header></Header>
    <Routes>
      <Route path='/' element={
        <RequireAuth>
          <Home></Home>
        </RequireAuth>
      }></Route>
      <Route path='/home' element={
                <RequireAuth>
                <Home></Home>
              </RequireAuth>
      }></Route>
      <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
      <Route path='/experts' element={<Experts></Experts>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/checkout/:serviceId' element={
        <RequireAuth>
              <Checkout></Checkout> 
        </RequireAuth>
      }/>
      <Route path='/addservice' element={
        <RequireAuth>
              <AddService></AddService> 
        </RequireAuth>
      }/>
      <Route path='/manage' element={
        <RequireAuth>
              <ManageServices></ManageServices> 
        </RequireAuth>
      }/>
      <Route path='/orders' element={
        <RequireAuth>
              <Order></Order> 
        </RequireAuth>
      }/>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
