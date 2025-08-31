import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../../index.css';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';
import Plants from '../LInkComponents/Plants/Plants';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Motion from '../Motion/Motion';

const Home = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center p-4">
          <h1 className=" abyssinica">
            Let's Make <br /> our lives <br />{' '}
            <span className=" font-semibold text-2xl">Greener</span>{' '}
          </h1>

          <FontAwesomeIcon
            icon={faBars}
            className=" cursor-pointer border-1 p-2 rounded-xl"
          />
        </div>
        <Nav />
        <div className=" p-4">
          {/* <Motion /> */}
          <Routes>
            <Route path="/plants" element={<Plants />} />
          </Routes>
        </div>
        <div className=" flex justify-between items-center px-4">
          <h1 className=" abyssinica font-medium">Plant Collections</h1>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </>
  );
};

export default Home;
