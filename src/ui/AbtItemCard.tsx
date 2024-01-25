import { FaBars, FaTimesCircle } from "react-icons/fa"

interface AbtItemTypes{
  title: String,
  text: String
}

const AbtItemCard = ({title, text}: AbtItemTypes) => {
  return (
    <div className="rounded-xl shadow-xl p-8 w-72 h-72 bg-white flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-4">
       <FaTimesCircle color="red" size={50} /> 
        <p className="text-primary text-center text-3xl font-[600]">{title}</p>
        <p className="text-center">{text}</p>
      </div>
      

    </div>
  )
}

export default AbtItemCard