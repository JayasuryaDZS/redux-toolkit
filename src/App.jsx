// import { useState } from 'react'
import CakeView from './features/cake/cakeView'
import IcecreamView from './features/icecream/icecreamView'
import UserView from './features/users/userView'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <CakeView />
        <IcecreamView />
        <UserView />
      </div>
    </>
  )
}

export default App
