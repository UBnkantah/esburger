import { FaArrowLeftLong } from "react-icons/fa6";
import { Navbar } from "../../components";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ScartItems from "../../../ui/ScartItems";
import { clearCart, getTotals } from "../../../app/CartSlice";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Herosection = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const googlelink = import.meta.env.VITE_GOOGLE;

  console.log(googlelink, "from env");

  const cartItems = cart.cartItems;

  const handlePayment = async () => {
    console.log(cartItems, "CART Items");
    try {
      const res = await axios.post(
        "http://localhost:8000/api/stripe/payments",
        { cartItems }
      );
      console.log(res.data);
      if (res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (err: any) {
      toast.error(err, { position: "bottom-left" });
    }
  };

  return (
    <div>
      <Navbar />
      <h2 className="text-center py-4 text-3xl font-[600]">Shopping Cart</h2>
      <div className="container">
        <div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-start items-start py-4">
              <div>
                <h2 className="text-xl font-[600]">PRODUCT</h2>
              </div>
              <div>
                <h2 className="text-xl font-[600]">PRICE</h2>
              </div>
              <div>
                <h2 className="text-xl font-[600]">QUANTITY</h2>
              </div>
              <div>
                <h2 className="text-xl font-[600]">TOTAL</h2>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {cart.cartItems?.map((item: any) => (
                <ScartItems key={item.id} item={item} />
              ))}
            </div>
            <div className="flex justify-around items-center py-8">
              <Link to="/shop">
                <FaArrowLeftLong />
                Continue Shopping
              </Link>
              <div>
                <p
                  className={
                    cart.cartTotalAmount === 0
                      ? "text-[0]"
                      : "text-2xl font-[500]"
                  }
                >
                  ${Math.round(cart.cartTotalAmount * 100) / 100}
                </p>
              </div>
            </div>
            <div className="flex justify-around items-center">
              <button className="border border-primary text-primary font-[600] bg-white rounded-xl px-4 py-2" onClick={() => dispatch(clearCart())}>CLEAR CART</button>
             <button
              className="bg-black px-4 py-2 rounded-xl text-white"
              onClick={handlePayment}
            >
              PAY NOW
            </button> 
            </div>
            

            {/* <PayButton cartItems={cart.cartItems}/>  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
