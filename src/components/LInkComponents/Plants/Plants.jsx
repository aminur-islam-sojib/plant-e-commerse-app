import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../../Home/Home';
import { Navigate } from 'react-router-dom';

const Plants = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1> Hello Plants </h1>

        <button onClick={() => navigate('/')} className="btn btn-success">
          Home
        </button>
      </div>
    </>
  );
};

export default Plants;
