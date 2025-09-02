import { useSelector } from 'react-redux';
const ShopCartFooter = () => {
  const carts = useSelector((state) => state.cartsR.carts);

  return (
    <>
      <section className=" absolute bottom-0  w-[430px] ">
        <div className="mt-10 bg-[#44F1A6] rounded-t-4xl p-7 relative">
          <div className=" footer-div bg-[#E3F0FF] p-5 absolute" />
          <div className=" footer-bar" />
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopCartFooter;
