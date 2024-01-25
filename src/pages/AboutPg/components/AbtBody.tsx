import { reviewone } from "../../../assets"
import { AbtItemCard } from "../../../ui"
import BlogAbtItem from "../../../ui/BlogAbtItem"

const abtItemBdy = [
    {
        id: 1,
        title: "Unique Taste",
        text: "A burger is more than just a, it is a wish fulfilled."
    },
    {
        id: 2,
        title: "Certified Farm",
        text: "The last time you had a burger was too long ago."
    },
    {
        id: 3,
        title: "Home Delivery",
        text: "Why are you still reading this - go get a burger!"
    }
]

const blogItemBd = [
    {
        id: 1,
        title: "Order Fast Food Without Destroying Your Diet",
        time: "February 8, 2020"
    },
    {
        id: 2,
        title: "Eat Best Fat & Furious Burger for Lunch",
        time: "April 12, 2019"
    },
    {
        id: 3,
        title: "Viral YouTube Burger Changing the Industry",
        time: "January 10, 2018"
    }
]

const AbtBody = () => {
  return (
    <div>
        <div className="bg-primary">
            <div className="container pt-20 pb-10">
             <h2 className="text-second md:text-5xl font-[800] text-center text-2xl">Flipping Since ‘94</h2>
            <div className="flex justify-center items-center gap-12 py-20 flex-wrap">
                {abtItemBdy.map((item) => (
                   <AbtItemCard key={item.id} text={item.text} title={item.title}/> 
                ))}
                
            </div>   
            </div>
            
        </div>
        <div className="bg-second py-12">
            <div className="container">
                    <h2 className="text-5xl font-[800] text-center pt-4 pb-12">ABOUT US</h2>
                    <div className="rounded-xl bg-white px-6 py-10 mt-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <img src={reviewone} alt="" />
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white px-6 py-10 mt-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <img src={reviewone} alt="" />
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white px-6 py-10 mt-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <img src={reviewone} alt="" />
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div className="bg-cover bg-center bg-heroshop">
            <div className="container flex justify-center items-center">
                    <div className="md:w-1/2 w-full py-36">
                        <h4 className="text-5xl font-[800] text-white text-center">"I don't remember a single mouthful I didn't enjoy! "</h4>
                    </div>
            </div>
        </div>
        <div className="bg-primary">
            <div className="container py-12">
                <h4 className="text-center text-5xl font-[700]">Latest Blog's Posts</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-8">
                    <BlogAbtItem />
                    <BlogAbtItem />
                    <BlogAbtItem />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AbtBody