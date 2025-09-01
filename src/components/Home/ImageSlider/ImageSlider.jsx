import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const ImageSlider = () => {
  // store registers the reducer under `imagesR` in src/app/store.js
  const cards = useSelector((state) => state.imagesR.cards) ?? [];

  // index of the card currently in center
  const [centerIndex, setCenterIndex] = useState(0);

  // variants position the image absolutely inside the container
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
      scale: 0.7,
      zIndex: 4,
      opacity: 1,
      filter: 'blur(4px)',
      rotate: 5,
    },
    left: {
      left: '15%',
      x: '-50%',
      scale: 0.7,
      zIndex: 4,
      opacity: 1,
      filter: 'blur(4px)',
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
      <div className="px-4 relative" style={{ height: 260 }}>
        {/* images positioned absolutely inside this container */}
        {cards.map((card, idx) => (
          <motion.img
            key={card.id ?? idx}
            src={card.url}
            alt={card.title ?? card.url}
            className="rounded-2xl shadow-md"
            initial={false}
            animate={positionFor(idx)}
            variants={imageVariants}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            style={{ position: 'absolute', top: '50%', height: '200px' }}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        <button onClick={prev} className="btn btn-sm">
          Prev
        </button>
        <button onClick={next} className="btn btn-sm btn-primary">
          Next
        </button>
      </div>
    </>
  );
};

export default ImageSlider;
