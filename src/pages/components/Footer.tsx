import { FaBars, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"





const fmItem = [
    {
        id: 1,
        text: "60 East 65th Street, NY"
    },
    {
        id: 2,
        text: "Mon - Sat: 11AM - 11PM"
    },
    {
        id: 3,
        text: "Sun: 11AM - 08PM"
    },
    {
        id: 4,
        text: "Mon - Sat: 01PM - 10PM"
    },
    {
        id: 5,
        text: "1-800-700-600"
    }
]

const Footer = () => {
  return (
    <div className="bg-fimg bg-cover bg-center text-white">
        <div className="backdrop-brightness-50 border-l-indigo-900">
<div className="container">
        <div className="flex justify-center items-center">
            <div className="md:w-1/2 w-full py-12 flex flex-col justify-center items-center gap-4">
                <p className="text-center text-5xl font-[700]">EBurger</p>
                <p className="text-center text-3xl font-[600]">Stay informed about special offers</p>
                <p className="text-center text-2xl font-[500]">Subscribe to the newsleter</p>
                <div className="w-full flex flex-row relative mx-4">
                    <input type="text" className="w-full px-4 text-black font-[500] rounded-full py-3"  placeholder="Enter Your Email "/>
                    <button className="py-3 px-8 rounded-full font-[700] bg-primary text-white absolute right-0 top-0">Subscribe</button>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-20">
            <div>
                <p className="text-primary text-xl font-[600]">LET’S GET TOGETHER</p>
                <div className="flex flex-col gap-2 py-2">
                    {fmItem.map(item => (
                     <div key={item.id} className="flex flex-row gap-4 justify-start items-center">              
                        <div>
                         <FaBars />   
                        </div>
                        <div>
                            <p>{item.text}</p>
                        </div>
                    </div>   
                        ))}
                    
                </div>
                <div className="flex flex-row gap-2 py-2">
                    <div className="p-1.5 bg-primary rounded-full">
                        <FaFacebook fill="#fff" size={20}/>
                    </div>
                    <div className="p-1.5 bg-primary rounded-full">
                        <FaTwitter fill="#fff" size={20} />
                    </div>
                    <div className="p-1.5 bg-primary rounded-full">
                        <FaInstagram fill="#fff" size={20} />
                    </div>
                </div>
            </div>
            <div>
                <p className="text-primary text-xl font-[600]">ABOUT US</p>
            </div>
            <div>
                <p className="text-primary text-xl font-[600]">QUICK MENU</p>
                
            </div>
            <div>
                <p className="text-primary text-xl font-[600]">INSTAGRAM</p>
            </div>
        </div>
    </div>  
        </div>
      
    </div>
    
  )
}

export default Footer