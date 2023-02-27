import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Meal from '../pages/Meal'

const AppRouter = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/meal/:id' element={<Meal />} />
  </Routes>
)

export default AppRouter
