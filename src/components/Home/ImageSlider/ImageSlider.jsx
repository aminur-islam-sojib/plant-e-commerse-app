import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addToCart } from './ImageSlice';
const ImageSlider = () => {
  // store registers the reducer under `cartsR` in src/app/store.js
  const cards = useSelector((state) => state.cartsR.cards) ?? [];

  // index of the card currently in center
  const [centerIndex, setCenterIndex] = useState(0);

  // variants position the card absolutely inside the container
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
      scale: 0.75,
      zIndex: 4,
      opacity: 1,
      filter: 'blur(2px)',
    },
    left: {
      left: '15%',
      x: '-50%',
      scale: 0.75,
      zIndex: 4,
      opacity: 1,
      filter: 'blur(2px)',
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

  const dispatch = useDispatch();

  const addToCarts = (id) => {
    dispatch(addToCart({ id }));
  };

  return (
    <>
      <div className="px-4 relative" style={{ height: 460 }}>
        {/* images positioned absolutely inside this container */}
        {cards.map((card, idx) => (
          <motion.div
            key={card.id ?? idx}
            initial={false}
            variants={imageVariants}
            animate={positionFor(idx)}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            style={{ position: 'absolute', top: '12%', width: '260px' }}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              style={{ width: '100%' }}
            >
              <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-white">
                <img
                  src={card.url}
                  alt={card.title}
                  className="object-contain h-full rounded-2xl"
                  style={{ width: '100%' }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 text-center">
                  {card.subtitle}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <button
                    onClick={() => addToCarts(card.id)}
                    className="btn btn-sm btn-neutral p-5 w-full flex items-center rounded-4xl mt-2 gap-2"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <div className="flex justify-between w-full ">
                      <div> Add to Cart</div>
                      <p className="font-medium">${card.price}</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="absolute left-1/2 transform bottom-1 -translate-x-1/2 flex gap-3 z-10">
          <button onClick={prev} className="btn btn-sm btn-neutral">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={next} className="btn btn-sm btn-neutral">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
