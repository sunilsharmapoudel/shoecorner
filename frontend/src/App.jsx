import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout />}>
      </Route>
      <Route> {/* Admin Layout */}</Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
