import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IPLTable from './components/IPLTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <IPLTable/>
    </>
  )
}

export default App
