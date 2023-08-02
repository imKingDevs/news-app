
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
// News
import News from './Components/News';
import Business from './Components/News/Business';
import Entertainment from './Components/News/Entertainment';
import General from './Components/News/General';
import Health from './Components/News/Health';
import Science from './Components/News/Science';
import Sports from './Components/News/Sports';
import Technology from './Components/News/Technology';
import India from './Components/News/India';

function App() {  

  return (
    <>
      <div className="main">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />

          {/* news data */}
          <Route exact path='/news' element={<News />} />
          <Route exact path='/news/india' element={<India />} />
          <Route exact path='/news/business' element={<Business />} />
          <Route exact path='/news/entertainment' element={<Entertainment />} />
          <Route exact path='/news/general' element={<General />} />
          <Route exact path='/news/health' element={<Health />} />
          <Route exact path='/news/science' element={<Science />} />
          <Route exact path='/news/sports' element={<Sports />} />
          <Route exact path='/news/technology' element={<Technology />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
