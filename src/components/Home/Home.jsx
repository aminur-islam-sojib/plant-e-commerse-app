import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../../index.css';
import Nav from './Nav';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Plants from '../LInkComponents/Plants/Plants';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ImageSlider from './ImageSlider/ImageSlider';
import CartFooter from '../Cart/CartFooter';

const Home = () => {
  const navigate = useNavigate();

  const handleDetailsPage = () => {
    navigate('/details');
  };
  return (
    <>
      <div className="  bg-gradient-to-b from-[#E3F0FF]/20 to-[#E3F0FF]/100 rounded-2xl">
        <div className="flex justify-between items-center p-4">
          <h1 className=" abyssinica text-2xl font-medium">
            Let's Make <br /> our lives <br />{' '}
            <span className=" font-semibold text-2xl text-green-500">
              Greener
            </span>{' '}
          </h1>

          <FontAwesomeIcon
            icon={faBars}
            className=" cursor-pointer border-1 p-2 rounded-xl"
          />
        </div>

        {/* Nav Is Here */}
        <Nav />
        <div className=" px-4 mt-4">
          <Routes>
            <Route path="/plants" element={<Plants />} />
          </Routes>
        </div>
        <div className=" flex justify-between items-center px-4">
          <h1 className=" abyssinica font-medium text-xl">Plant Collections</h1>
          <FontAwesomeIcon icon={faArrowRight} onClick={handleDetailsPage} />
        </div>

        {/* ImageSlider Is Here */}
        <ImageSlider />
        <CartFooter />
      </div>
    </>
  );
};

export default Home;
