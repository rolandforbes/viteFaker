import { useState } from 'react';
import FakerAPIDemo from './components/FakerAPIDemo';
import HomePage from './components/HomePage';
import './App.css';

const App = () => {
  const [showFakerAPI, setShowFakerAPI] = useState(false);
  return <>
    <HomePage setShowFakerAPI={setShowFakerAPI} showFakerAPI={showFakerAPI}>
      <FakerAPIDemo showFakerAPI={showFakerAPI} />
    </HomePage>
  </>;
}
export default App;
