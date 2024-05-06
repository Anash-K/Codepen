
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './Styles/Style.css'
import Home from './Components/home'
import PageNotFound from './Components/PageNotFound'



function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
