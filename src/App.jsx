import './App.css';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import Plants from './components/LInkComponents/Plants/Plants';
import { Routes, Route } from 'react-router-dom';
import { Cart } from './components/Cart/Cart';
import { Flower } from './components/LInkComponents/Flower/Flower';
import { Cacti } from './components/LInkComponents/Cacti/Cacti';
import { Herbs } from './components/LInkComponents/Herbs/Herbs';
import { Bonsai } from './components/LInkComponents/Bonsai/Bonsai';
function App() {
  return (
    <>
      <div className="w-[430px] overflow-hidden mx-auto">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="plants" element={<Plants />} />
            <Route path="flowers" element={<Flower />} />
            <Route path="cacti" element={<Cacti />} />
            <Route path="herbs" element={<Herbs />} />
            <Route path="bonsai" element={<Bonsai />} />
          </Route>
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
