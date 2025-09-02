import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Details = () => {
  const cards = useSelector((state) => state.cartsR.cards);

  console.log(cards);

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
    </>
  );
};

export default Details;
