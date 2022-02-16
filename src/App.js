import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import NoMatch from './screens/NoMatch';

function App() {
  return (
    <div className="App">
      <div className='links'>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>

    </div>
  );
}

export default App;
