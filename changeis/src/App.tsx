import changeIsLogo from '/changeIsLogo.png';
import reactLogo from './assets/react.svg';
import typescriptLogo from './assets/typescript.svg';
import viteLogo from '/vite.svg';
import './App.css';


function App() {

  return (
    <>
      <div className='align-items-center d-flex gap-2'>
        <div>
          <img src={changeIsLogo} className="logo" alt='changeis logo' />
        </div>
        <h2 className='brown'>&</h2>
        <h1 className='fw-light'>
          ROLAND FORBES
        </h1>
      </div>
      <h3 className='mb-1 opacity-50 text-start'>
        <u>FAKER API CODING CHALLENGE SUBMISSION</u>
      </h3>
      <h5 className='align-items-center d-flex gap-1 logo-xs m-0 text-start'>
        <span className='brown pe-2'>
          <u>BUILT USING:</u>
        </span>
        <a href='https://react.dev' target='_blank'>
          <img className='logo-spin' src={reactLogo} />
        </a>
        <a href='https://typescriptlang.org' target='_blank'>
          <img src={typescriptLogo} />
        </a>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} />
        </a>
      </h5>
    </>
  )
}

export default App
