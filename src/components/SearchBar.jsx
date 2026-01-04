import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {setQuery} from '../redux/features/searchSlice'

const SearchBar = () => {
    const [text, settext] = useState('')
    const dispatch=useDispatch()

    const submithandler=(e)=>{
        e.preventDefault()
        console.log("submitted text:",text)
        dispatch(setQuery(text))
        settext('')
    }
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }} className='bg-(--c1) flex p-10 flex gap-5' >
        <input
        value={text}
        onChange={(e)=>{
            settext(e.target.value)
        }}
        required 
        className='w-full border-2 px-4 py-2 text-xl rounded outline-none' type="text" placeholder='search anything....' />
        <button className=' active:scale-95 cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
