import { useSelector } from 'react-redux';

const CartFooter = () => {
  const carts = useSelector((state) => state.cartsR.carts);

  const total = carts
    .map((item) => item.price * item.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  console.log(total);

  console.log(carts.length);

  return (
    <div className="mt-10 bg-[#44F1A6] rounded-t-4xl p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 p-2">
          <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-medium">
            {carts.length}
          </div>
          <div>
            <h1 className="">Cart</h1>
            <h2 className="flex gap-1 text-sm text-gray-700">
              <span className="font-medium">{carts.length}</span>
              <span>items</span>
            </h2>
          </div>
        </div>
        <div>hi</div>
      </div>
    </div>
  );
};

export default CartFooter;
