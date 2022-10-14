import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Resourses
//https://www.youtube.com/watch?v=Reny0cTTv24
//https://rapidapi.com/wirefreethought/api/geodb-cities/
//https://home.openweathermap.org/api_keys

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//PAGES
import Home from './pages/Home';
import Snow from "./pages/Snow";
import Flood from "./pages/Flood";
import Thunder from "./pages/Thunder";
import Heat from "./pages/Heat";

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/heat_emergencies' element={<Heat />} />
            <Route path='/snow_emergencies' element={<Snow />} />
            <Route path='/flood_emergencies' element={<Flood />} />
            <Route path='/thunder_emergencies' element={<Thunder />} />
          </Routes>
          <br/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
