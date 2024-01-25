import { FaGreaterThan } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { fimg } from "../assets"


const BlogAbtItem = () => {
  return (
    <div className="rounded-2xl bg-white">
      <img src={fimg} alt="" className="w-full rounded-t-2xl"/>
      <div className="p-8">
        <p className="text-sm">April 12, 2019</p>
        <h4 className="text-3xl font-[800] pt-2 pb-6">Order Fast Food Without Destroying Your Diet</h4>
        <Link to="">
          <div className="flex flex-row gap-2">
            <p className="text-primary font-[500]">READ MORE</p>
            <div className="border border-primary rounded-full w-fit p-1">
              <FaGreaterThan color="#e84242"/>
            </div>
            
          </div>
        </Link>
      </div>
    </div>
  )
}

export default BlogAbtItem