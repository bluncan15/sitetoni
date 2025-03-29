import Title from './Title';

const CartTotal = ( {total} ) => {
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={'Cost'} text2={'estimativ'} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm ">
        <div className="flex justify-between">
          <p>Total</p>
          <p>
            De la {total} {} RON
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
