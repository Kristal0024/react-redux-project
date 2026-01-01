import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className='relative w-[18vw] h-80 bg-white text-black border'>
<a target="_blank" href={item.url}>
    {item.type =='photo'?<img className='h-full w-full object-cover object-center' src={item.src} alt="" />:''}
{item.type =='video'?<video autoPlay loop muted src={item.src}></video>:''}
</a>
<div id='bottom' className='flex justify-between gap-2 items-center w-full px-6 py-10 text-white absolute bottom-0'><h2 className='text-sm font-semibold capitalize '>{item.title}</h2>
<button className='cursor-pointer bg-indigo-600 text-white rounded px-3 py-2 font-medium'>Save</button>
</div>
    </div>
  )
}

export default ResultCard
