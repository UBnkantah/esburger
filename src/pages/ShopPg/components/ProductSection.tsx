import { useState } from 'react'
import { burgerData } from '../../../utils/data'
import Prodeat from '../../../ui/Prodeat'

const ProductSection = () => {
    const [search, setSearch] = useState<string >("")
    const [selectCategory, setSelectCategory] = useState("")


    let productDet = burgerData;

    if(search){
        productDet = burgerData.filter((product : any) =>
    product.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
  );
    }

    

  return (
    <div className='container'>
        <div className='flex justify-between items-center py-10'>
            <div>
                <input type="text" value={search} onChange={(e: any) => setSearch(e.target.value)} className='rounded-xl border border-black p-2' placeholder='Search'/>
            </div>
            <div>
                <select name="" id="" value={selectCategory} onChange={(e : any) => setSelectCategory(e.target.value)} className='px-4 py-2 rounded-xl border border-black'>
                    <option value="">Select Categories</option>
                </select>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {productDet?.map((item: any) => (
            <Prodeat key={item.id} item={item} />
        ))}
        </div>
    </div>
  )
}

export default ProductSection