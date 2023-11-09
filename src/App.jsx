import Recording from './components/recording.jsx'
import Header from './components/header.jsx'
import Rogin from "./components/login.jsx"
import { useState } from 'react'

function App() {
  const [login, isLogin] = useState(false)
  const successLogin = () => {
    isLogin(true)
  }

  return (
    <>
      {!login && <Rogin onChildEvent = {successLogin}/>}
      {login && <Header/>}
      {login && <Recording/>}
    </>
  )
}

export default App