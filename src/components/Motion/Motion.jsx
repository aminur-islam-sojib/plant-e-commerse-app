import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';

const categories = ['Plants', 'Flowers', 'Cacti', 'Herbs', 'Bonsai'];

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="relative flex justify-around text-sm font-medium text-gray-500 pb-4">
      {categories.map((cat) => {
        const isActive =
          location.pathname.toLowerCase() === `/${cat.toLowerCase()}`;

        return (
          <div key={cat} className="relative px-2 py-2">
            {isActive && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-green-300 rounded-2xl z-0"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <NavLink to={`/${cat}`} className="relative z-10 px-3 py-2">
              {cat}
            </NavLink>
          </div>
        );
      })}
    </nav>
  );
};

export default Nav;
