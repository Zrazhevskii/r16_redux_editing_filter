// import { useState } from 'react'
import './App.css'
import { Items } from './components/Items'
import { Form } from './components/Form'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-wrapper'>
        <Form/>
        <Items/>
      </div>
    </>
  )
}

export default App
