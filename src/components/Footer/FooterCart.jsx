import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Home/ImageSlider/ImageSlice';
import { useState } from 'react';

const FooterCart = ({ centerId }) => {
  const dispatch = useDispatch();

  const [toastVisible, setToastVisible] = useState(false);

  const addToCarts = (id) => {
    dispatch(addToCart({ id }));

    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  const carts = useSelector((state) => state.cartsR.cards);
  const currentId = carts.find((cart) => cart.id === centerId);
  const price = currentId ? currentId.price : 0;

  return (
    <>
      <footer className=" my-15 items-center justify-center flex ">
        <div
          onClick={() => {
            addToCarts(centerId);
          }}
          className=" flex justify-between items-center rounded-[100px]  bg-black text-white p-3 w-[80%]  "
        >
          <div className=" flex gap-2 items-center p-2 rounded-lg cursor-pointer">
            <div className="h-[50px] w-[50px] bg-accent p-3 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faCartPlus} className=" text-2xl" />
            </div>
            <h1 className=" font-medium text-[18px] ">Add to cart</h1>
          </div>
          <div className=" text-2xl mr-2.5 font-medium">${price}</div>
        </div>
      </footer>

      {toastVisible && (
        <div className="toast toast-top toast-center z-50">
          <div className="alert alert-success">
            <span>Item added successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export { FooterCart };
