import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import './App.css';
import Trending from './pages/Trending';
import Location from './pages/Location';
import Country from './pages/Country';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Navbar from './pages/Navbar';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Routes>
              <Route path='/' element={<Trending />}/>
              {/* <Route path='/trending' element={<Trending />}/> */}
              <Route path='/location' element={<Location />}/>
              <Route path='/country' element={<Country />}/>
              <Route path='/categories' element={ <Categories /> } />
              <Route path='/category' element={ <Category /> } />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
