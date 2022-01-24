import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Trending from './pages/Trending';
import Location from './pages/Location';
import Country from './pages/Country';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Navbar from './pages/Navbar';
import Register from './Auth/Register';
import Login from './Auth/Login';
import List from './pages/List'


const k = window.location.pathname;
function App() {
  return (
      <BrowserRouter>
        <div className="App">
            {/* { (k !== "/login" && k !== "/register" ) && <Navbar />} */}
            <Routes>
              <Route path='/' element={<Trending />}/>
              {/* <Route path='/trending' element={<Trending />}/> */}
              <Route path='/location' element={<Location />}/>
              <Route path='/country' element={<Country />}/>
              <Route path='/categories' element={ <Categories /> } />
              <Route path='/category' element={ <Category /> } />
              <Route path='/login' element={ <Login /> } />
              <Route path='/register' element={ <Register /> } />
              <Route path='/collection' element={ <List /> } />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
