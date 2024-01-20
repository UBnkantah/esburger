import { Navbar } from '../../components'

const Herosection = () => {
  return (
    <div className='bg-heroshop bg-cover bg-center h-[50vh]'>
        <Navbar />
        <div className='container flex justify-center items-center'>
         <div className='md:w-1/2 w-full'>
            <h3 className='text-5xl font-[700] text-center'>Order and Enjoy</h3>
            <p className='text-center font-[600] text-md'>Start your order and enjoy the tastiest burgers</p>
        </div> 
        </div>
        
    </div>
  )
}

export default Herosection