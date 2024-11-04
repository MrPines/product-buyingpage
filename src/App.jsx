import { useState } from 'react'
import './App.css'
import ProductPage from './components/ProductPage/ProductPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductPage></ProductPage>
    </>
  )
}

export default App
