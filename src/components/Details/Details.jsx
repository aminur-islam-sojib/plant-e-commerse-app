import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useState } from 'react';
const Details = () => {
  const cards = useSelector((state) => state.cartsR.cards) ?? [];

  const [centerIndex, setCenterIndex] = useState(0);

  console.log(cards);

  const imageVariants = {
    center: {
      left: '50%',
      x: '-50%',
      scale: 1,
      zIndex: 5,
      opacity: 1,
      filter: 'blur(0px)',
      rotate: 0,
    },

    hidden: {
      left: '-50%',
      x: '-50%',
      scale: 0.6,
      zIndex: 1,
      opacity: 0,
      filter: 'blur(6px)',
    },
  };

  const count = cards.length;

  const positionFor = (idx) => {
    if (count === 0) return 'hidden';
    if (idx === centerIndex) return 'center';

    return 'hidden';
  };

  const next = () => {
    if (count === 0) return;
    setCenterIndex((c) => (c + 1) % count);
  };

  const prev = () => {
    if (count === 0) return;
    setCenterIndex((c) => (c - 1 + count) % count);
  };

  return (
    <>
      <nav className=" flex justify-between items-center p-4 ">
        <div>
          <h1 className=" abyssinica text-3xl ">
            The Potted <br /> <span className=" font-bold">Head </span>
          </h1>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faBars}
            className=" cursor-pointer border-1 p-2 rounded-xl"
          />
        </div>
      </nav>

      <div className="px-4 relative" style={{ height: 460 }}>
        {cards.map((card, idx) => (
          <motion.div
            key={card.id ?? idx}
            initial={false}
            variants={imageVariants}
            animate={positionFor(idx)}
            transition={{ type: 'spring', stiffness: 300, damping: 40 }}
            style={{ position: 'absolute', top: '12%', width: '260px' }}
          >
            <img src={card.url} alt={card.name} />
          </motion.div>
        ))}
      </div>

      <div className=" flex justify-between">
        <button className="btn btn-success" onClick={prev}>
          Previous
        </button>
        <button className="btn btn-success" onClick={next}>
          Next
        </button>
      </div>
    </>
  );
};

export default Details;
