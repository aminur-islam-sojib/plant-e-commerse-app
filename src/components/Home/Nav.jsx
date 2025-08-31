import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../index.css';

const categories = ['Plants', 'Flowers', 'Cacti', 'Herbs', 'Bonsai'];

const Nav = () => {
  const location = useLocation();

  return (
    <nav className=" relative flex justify-around text-sm text-black">
      <div className=" flex gap-1.5">
        {categories.map((cat) => {
          const isActive =
            location.pathname.toLowerCase() === `/${cat.toLowerCase()}`;

          return (
            <div key={cat} className="relative">
              {isActive && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-1 bg-green-300 rounded-2xl z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <div className=" bg-white  px-[8px] py-[10px] rounded-2xl">
                <NavLink to={`/${cat}`} className="relative z-10 px-3">
                  {cat}
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
