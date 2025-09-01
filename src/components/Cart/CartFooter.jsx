import { useSelector } from 'react-redux';

const CartFooter = () => {
  const carts = useSelector((state) => state.cartsR.carts);

  const total = carts
    .map((item) => item.price * item.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  console.log(total);

  console.log(carts.length);

  return (
    <div className="mt-10 bg-[#44F1A6] rounded-t-4xl p-7">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 ">
          <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-medium">
            {carts.length}
          </div>
          <div>
            <h1 className="font-medium text-[18px]">Cart</h1>
            <h2 className="flex gap-1 text-sm text-gray-700">
              <span className="font-medium">{carts.length}</span>
              <span>items</span>
            </h2>
          </div>
        </div>
        <div className=" flex relative">
          <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-[#44F1A6]">
            <img
              src={carts[2]?.url}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden  border-4 border-[#44F1A6] absolute -left-6">
            <img
              src={carts[1]?.url}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#44F1A6] absolute -left-12">
            <img
              src={carts[0]?.url}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartFooter;
