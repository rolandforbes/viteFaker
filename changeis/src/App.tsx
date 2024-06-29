import { useState } from 'react';
import Faker from './components/Faker';
import HomePage from './components/HomePage';
import './App.css';

const App = () => {
  const [showFakerAPI, setShowFakerAPI] = useState(false);
  return <>
    <HomePage setShowFakerAPI={setShowFakerAPI} showFakerAPI={showFakerAPI}>
      <Faker showFakerAPI={showFakerAPI} />
    </HomePage>
  </>;
}
export default App;
