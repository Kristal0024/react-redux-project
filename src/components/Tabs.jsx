import React from 'react'
import { setActiveTab } from '../redux/features/searchSlice'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'

function Tabs() {
    const tabs=['photos','videos']
    const dispatch= useDispatch()
    const activeTab=useSelector((state)=>state.search.activeTab)
  return (
    <div className='flex gap-10 p-10'>
        {tabs.map(function(elem,idx){
            return <button
            onClick={()=>{
                dispatch(setActiveTab(elem))
            }}
            className={`${(activeTab==elem?'bg-blue-700':'bg-gray-500')} transition px-5 py-2 rounded uppercase cursor-pointer active:scale-95`} key={idx}>{elem}</button>
        })}
    </div>
  )
}

export default Tabs