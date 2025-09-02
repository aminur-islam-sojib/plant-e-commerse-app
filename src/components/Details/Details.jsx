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
    right: {
      left: '85%',
      x: '-50%',
      scale: 0.8,
      zIndex: 4,
      opacity: 0,
      filter: 'blur(3px)',
      rotate: 5,
    },
    left: {
      left: '15%',
      x: '-50%',
      scale: 0.8,
      zIndex: 4,
      opacity: 0,
      filter: 'blur(3px)',
      rotate: -5,
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
    if (idx === (centerIndex + 1) % count) return 'right';
    if (idx === (centerIndex - 1 + count) % count) return 'left';
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

      <div className="px-4 w-[430px] relative" style={{ height: 460 }}>
        {cards.map((card, idx) => (
          <motion.div
            key={card.id ?? idx}
            initial={positionFor(idx)}
            variants={imageVariants}
            animate={positionFor(idx)}
            transition={{ type: 'spring', stiffness: 300, damping: 40 }}
            style={{ position: 'absolute', top: '12%', width: '260px' }}
            className=" relative"
          >
            <div className=" relative">
              <div className="plant-text abyssinica absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[160px] -z-10">
                {card.name}
              </div>
              <div className=" absolute h-[170px] w-[170px] bg-gradient-to-b from-[#CCDDF6]/100 to-[#E1EFFD]/0 rounded-full top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10" />
              <img src={card.url} alt={card.title} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className=" w-[430px] overflow-hidden">
        {cards.map((card, idx) => (
          <motion.div
            key={card.id ?? idx}
            initial={positionFor(idx)}
            variants={imageVariants}
            animate={positionFor(idx)}
            transition={{ type: 'spring', stiffness: 300, damping: 40 }}
            style={{ position: 'absolute', top: '12%', width: '260px' }}
          >
            <div className=" mt-120 relative ">
              <h1 className=" text-center text-gray-500 italic absolute">
                {card.subtitle}
              </h1>
            </div>
          </motion.div>
        ))}
      </div>

      <div className=" flex justify-between relative mt-20 h-50">
        <button
          className="btn bg-gradient-to-b from-[#CCDDF6]/0 to-[#E1EFFD]/100 h-[200px] w-[200px] rotate-[-45deg] rounded-4xl absolute -left-25"
          onClick={prev}
        >
          <div className=" absolute rotate-45 top-[65%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 text-7xl">
            -
          </div>
        </button>
        <button
          className="btn bg-gradient-to-b from-[#CCDDF6]/0 to-[#E1EFFD]/100 h-[200px] w-[200px] rotate-[-45deg] rounded-4xl absolute -right-25"
          onClick={next}
        >
          <div className=" absolute rotate-45 top-[25%] right-[40%] transform -translate-x-1/2 -translate-y-1/2 text-7xl">
            +
          </div>
        </button>

        <div>
          <h1 className=" absolute left-[40%] top-10 text-8xl">Hi</h1>
        </div>
      </div>
    </>
  );
};

export default Details;
