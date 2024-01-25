import { Navbar } from '../../components'

const Herosection = () => {
  return (
    <div className="h-[50vh] bg-heroshop bg-center bg-cover ">
        <Navbar />
        <div className='container'>
        <div className='md:w-1/2 w-full mx-auto'>
          <h4 className='text-2xl font-[700] text-center'>Sourced locally</h4>
          <p className='text-lg text-center'>We use only pure and honest products</p>
        </div>
        </div>
    </div>
  )
}

export default Herosection