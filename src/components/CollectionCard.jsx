import React from 'react'
import {useDispatch} from 'react-redux'
import {removeToast, removeCollection} from '../redux/features/collectionSlice'
const CollectionCard = ({item}) => {
    const dispatch=useDispatch()
    const removeFromCollection=(item)=>{
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }
  return (
      <div className="relative w-[18vw] h-80 bg-white text-black border overflow-hidden rounded-xl">
      <a target="_blank" href={item.url}>
        {item.type == "photo" ? 
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
         : 
          ""
        }
        {item.type == "video" ? 
          <video  className="h-full w-full object-cover object-center" autoPlay loop muted src={item.src}></video>
        : 
          ""
        }
      </a>
      <div
        id="bottom"
        className="flex justify-between gap-3 items-center w-full px-4 py-10 text-white absolute bottom-0"
      >
        <h2 className="text-sm font-semibold capitalize h-10 overflow-hidden">
          {item.title}
        </h2>
        <button
          onClick={() => {
removeFromCollection(item)
        }}
          className="active:scale-95 cursor-pointer bg-indigo-600 text-white rounded px-3 py-2 font-medium"
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CollectionCard
