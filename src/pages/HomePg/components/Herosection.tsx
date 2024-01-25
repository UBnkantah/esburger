import { Navbar } from '../../components'
import floatbur from "../../../assets/float-burger.png";
import Prodeat from '../../../ui/Prodeat';
import { burgerData } from '../../../utils/data';
import homedel from "../../../assets/home_01_delivery.png"
import { FaBars } from 'react-icons/fa';
import { reviewfour, reviewone, reviewthree, reviewtwo } from '../../../assets';

const Herosection = () => {
    console.log(burgerData);
    let hmfoodItem = burgerData.slice(0, 8);


    console.log(hmfoodItem)

    const freeItem = [
      {
        id: 1,
        title: "Choose Burger",
        text: "Sesame snaps tootsie roll dessert candy canes apple pie marzipan topping toffee croissant."
      },
      {
        id: 2,
        title: "Delivery or Takeaway",
        text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test."
      },
      {
        id: 3,
        title: "Enjoy Burger",
        text: "Praesent interdum mollis neque purus sed diam integer, in egestas nulla eget pede."
      }
    ]

  return (
    <>
    <div className='h-screen bg-primary'>
        <Navbar />
        <div className='container '>
          <div className="flex justify-center items-center">
     <div className='w-full flex justify-center items-center'>
      <div>
        <img src={floatbur} alt="" className='w-full mx-auto z-30'  />
            <h2 className='text-5xl font-[800] text-center text-second'>Delicious Meal</h2>
      </div>
            
        </div>        
          </div>
         
        </div>
        
    </div>
    <div className='bg-primary pt-24'>
        <div className='container'>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-12'>
            
          {hmfoodItem.map((item: any) => (
            <Prodeat key={item.id} item={item}/>
          ) )}
        </div>   
        </div>
        
        
    </div>
    <div className='bg-second py-20'>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
            <div>
              <img src={homedel} alt="" className='w-full' />
            </div>
            <div>
            <h4 className='text-4xl text-primary font-[700]'>Free delivery 7 days a week</h4>
            <div className='flex flex-col gap-10'>
              {freeItem.map(item => (
                <div key={item.id} className='flex flex-row gap-4 justify-center items-center'>
                  <div className='p-4 flex justify-center items-center rounded-full bg-white'>
                    <FaBars size={30}/>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <h5 className='text-2xl font-[600]'>Choose Burger</h5>
                    <p>Sesame snaps tootsie roll dessert candy canes apple pie marzipan topping toffee croissant.</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
        </div>
    </div>
    <div className="bg-primary">
     <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 py-8">
                  <div>
                  <img src={reviewone} alt="" className='w-full'/>
                  </div>
                  <div>
                    <p className='text-5xl font-[800] text-second'>"I don't remember a single mouthful I didn't enjoy!"</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 py-8">
                  
                  <div>
                    <p className='text-5xl font-[800] text-second'>"I don't remember a single mouthful I didn't enjoy!"</p>
                  </div>
                  <div>
                  <img src={reviewtwo} alt="" className='w-full'/>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 py-8">
                  <div>
                  <img src={reviewthree} alt="" className='w-full'/>
                  </div>
                  <div>
                    <p className='text-5xl font-[800] text-second'>"I don't remember a single mouthful I didn't enjoy!"</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 py-8">
                  
                  <div>
                    <p className='text-5xl font-[800] text-second'>"I don't remember a single mouthful I didn't enjoy!"</p>
                  </div>
                  <div>
                  <img src={reviewfour} alt="" className='w-full'/>
                  </div>
                </div>

    </div> 
    </div>
    
    </>
    
  )
}

export default Herosection