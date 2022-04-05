import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import NoMatch from './screens/NoMatch';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NoMatch/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<TechnicalSkills/>}/>
      </Routes>

    </div>
  );
}

export default App;
