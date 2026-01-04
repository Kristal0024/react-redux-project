import React from 'react'
import Home from './pages/Home'
import CollectionPage from './pages/CollectionPage'
import NavBar from './components/NavBar'
import {Route,Routes} from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
const App = () => {
  return (
    <div className='min-h-screen text-white w-full bg-gray-950'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<CollectionPage/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
