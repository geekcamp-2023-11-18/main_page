import { useState } from 'react'
import Recording from './components/recording.jsx'
import Header from './components/header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Recording/>
    </>
  )
}

export default App
