import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import changeIsLogo from '/changeIsLogo.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='align-items-center d-flex'>
        <div>
          <img src={changeIsLogo} className="logo" alt="Vite logo" />
        </div>
        <h2 className='opacity-50'>
          &
        </h2>
        <div>
          <h1 className='fw-light'>
            ROLAND FORBES
          </h1>
        </div>
      </div>
      <h3 className='mb-0 opacity-50 text-start'>
        <u>FAKER API CODING CHALLENGE SUBMISSION</u>
      </h3>
      <h5 className='m-0 opacity-25 text-start'>
        Built using ReactJS, Typescript, && Vite
      </h5>
    </>
  )
}

export default App
