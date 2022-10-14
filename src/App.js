import './App.css';
import Navbar from './navbar';
import Home from './home';
import Favourites from './favourites';
import AddFavs from './addfavs';
import About from './about';
import Footer from './footer';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  let title = "fovourite series"
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favourites' element={<Favourites data={title} />} />
          <Route path='/addfavs' element={<AddFavs />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
