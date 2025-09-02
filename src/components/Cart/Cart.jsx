import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import ShopCartFooter from './shopCartFooter';

const Cart = () => {
  const carts = useSelector((state) => state.cartsR.carts);
  return (
    <section className="">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=" flex justify-between items-center p-4 "
      >
        <h1 className=" text-2xl font-medium">Cart</h1>
        <div className=" h-[40px] w-[40px] rounded-full flex justify-center items-center bg-[#44F1A6] overflow-hidden ">
          <h1 className=" text-2xl font-medium">{carts.length}</h1>
        </div>
      </motion.nav>
      {carts.length && carts.length > 0 ? (
        <>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-[#E3F0FF]/0 to-[#E3F0FF]/100 p-4  h-[800px] overflow-y-scroll overflow-hidden"
          >
            {carts.map((cart) => (
              <div key={cart.id}>
                <div className=" flex gap-2 items-center justify-between ">
                  <div className=" flex items-center gap-4 p-1">
                    <div className=" h-[80px] w-[80px] p-3 rounded-full flex justify-center items-center overflow-hidden bg-gradient-to-b from-[#E3F0FF]/100 to-[#E3F0FF]/0">
                      <img src={cart.url} alt="" />
                    </div>
                    <div>
                      <h1>{cart.title}</h1>
                      <h1 className=" text-sm text-gray-400">
                        {cart.quantity} Pieces
                      </h1>
                    </div>
                  </div>
                  <div className=" bg-white px-4 py-2 rounded-2xl shadow-sm">
                    <h1>$ {cart.price}</h1>
                  </div>
                </div>
                <hr className=" text-gray-200" />
              </div>
            ))}
          </motion.div>
          <ShopCartFooter />
        </>
      ) : (
        <div className="flex justify-center items-center h-[800px]">
          <p>No item is here</p>
        </div>
      )}
    </section>
  );
};

export { Cart };
