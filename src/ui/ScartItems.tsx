import { useDispatch } from "react-redux";
import { clearCart, decreaseCart, addToCart } from "../app/CartSlice";
const ScarItems = ({item}: any) => {

    const dispatch = useDispatch();

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-start items-start py-4 gap-4"

    >
      <div className="flex flex-row justify-start items-center gap-2 ">
        <div>
          <img src={item.images[1].lg} alt="" className="w-20 h-20 rounded-lg" />
        </div>

        <div>
          <p className="text-lg font-[600]">{item.name}</p>
          <button onClick={() => dispatch(clearCart())}>Remove</button>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center">
        <h2>{item.price}</h2>
      </div>
      <div className="flex flex-row justify-start items-center gap-2">
        <button
          className=" text-3xl px-2 py-0"
          onClick={() => dispatch(decreaseCart(item))}
        >
          -
        </button>
        <h2>{item.cartQuantity}</h2>
        <button
          className=" text-3xl px-2 py-0"
          onClick={() => dispatch(addToCart(item))}
        >
          +
        </button>
      </div>
      <div className="flex flex-row justify-start items-center">
        <h2>{item.price * item.cartQuantity}</h2>
      </div>
    </div>
  );
}

export default ScarItems