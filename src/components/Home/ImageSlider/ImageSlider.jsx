import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ImageSlider = () => {
  // store registers the reducer under `imageReducer` in src/app/store.js
  const cards = useSelector((state) => state.imagesR.cards);
  return (
    <div className=" px-4 flex gap-2 overflow-x-auto scrollbar-hide">
      {cards.map((card, idx) => {
        return (
          <div
            key={card.id ?? idx}
            className="p-2 rounded-lg shadow-md bg-white mt-2"
          >
            <img
              src={card.url}
              alt="Plant"
              className="w-full h-[200px] rounded-lg"
            />
            <div className="abyssinica text-nowrap mt-2">{card.title}</div>
            <div className="text-sm text-gray-500">{card.subtitle}</div>
            <button className="btn btn-neutral text-nowrap mt-5">
              <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart{' '}
              <span>${card.price}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
