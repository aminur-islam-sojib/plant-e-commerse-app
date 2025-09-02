import './App.css';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import Motion from './components/Motion/Motion';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="w-[430px] overflow-hidden mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
