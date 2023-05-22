import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Logout from './components/Logout';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
      <Route path='/' element={
        <Home />
        
      }>
      </Route>
      
      <Route path='/about' element={
        <About />
      }>
      </Route>

      <Route path='/contact' element={
        <Contact/>
      }>
      </Route>

      <Route path='/register' element={
        <Signup/>
      }>
      </Route>

      <Route path='/login' element={
        <Login/>
      }>
      </Route>
      <Route path='/logout' element={
        <Logout/>
      }>
      </Route>

      <Route path='*' element={
        <>This is 404 page</>
      }>
        
      </Route>
    </Routes>
    </>
  );
}

export default App;
