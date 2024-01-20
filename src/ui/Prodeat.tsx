import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals } from "../app/CartSlice";
import { useEffect } from "react";

const Prodeat = ({item}: any) => {

  const dispatch = useDispatch()
  const cart = useSelector((state : any) => state.cart);

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])

  return (
    <div className="bg-white p-8 rounded-3xl shadow-md flex flex-col justify-between items-center">
        <h2 className="text-2xl font-[700] pb-4 text-center">{item.name}</h2>
        <img src={item.images[1].lg} alt="" className="w-full"/>
        <div className="flex flex-row justify-between gap-8 items-center">
          <p className="text-xl font-[600]">${item.price}</p>  
          <button className="px-4 py-2 rounded-xl bg-black text-white" onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
        </div>
        
    </div>
  )
}

export default Prodeat;