import { Routes, Route } from 'react-router-dom'
import { Login,Register,Home } from './pages'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path="/signUp" element={<Register/>}/>
     </Routes>
    </>
  )
}

export default App
