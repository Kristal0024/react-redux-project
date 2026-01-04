import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import {clearCollection} from '../redux/features/collectionSlice'

const CollectionPage = () => {
const collection =useSelector(state=>state.collection.items)
const dispatch=useDispatch()
const clearAll=()=>{
  dispatch(clearCollection())
}

  return (
    <div className="overflow-auto px-10 py-6">
        {collection.length>0?
        <div className="flex justify-between mb-6">
        <h2 className='text-xl font-medium '>Your Collection</h2>
        <button
        onClick={()=>{
clearAll()
        }}
        className='active:scale-95 transition cursor-pointer bg-red-600 px-5 py-2 text-base font-medium rounded'>Clear Collection</button>
      </div>
        :<h2 className='text-2xl text-center'>Collection is Empty</h2>}
      
      <div className='flex justify-between w-full flex-wrap gap-6 '>
       {collection.map((item,idx)=>{
        return <div key={idx} className="">
        <CollectionCard item={item}/>
        </div>
       })}
    </div> 
    </div>
  )
}

export default CollectionPage
