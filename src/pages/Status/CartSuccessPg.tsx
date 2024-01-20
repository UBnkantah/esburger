import { FaLongArrowAltLeft } from "react-icons/fa"
import { successcart } from "../../assets"
import { Link } from "react-router-dom"

const CartSuccessPg = () => {
  return (
    <div>
       
     <div className="flex justify-center items-center ">
        <Link to="/">
            <div className="flex flex-row gap-2 items-center shadow-lg rounded-xl w-fit py-3 px-5">
                
                 <FaLongArrowAltLeft />
                <p>Back Home</p>   
               
            </div>
            </Link> 
        <div className="md:w-1/2 w-[80%] h-[80%]">
            
         <img src={successcart} alt="" className="w-full"/>   
        </div>
        
    </div>       
    </div>
    
  )
}

export default CartSuccessPg