import { useState } from 'react';
import FakerAPIDemo from './components/FakerAPIDemo';
import HomePage from './components/HomePage';
import './App.css';

// This is an app that calls FakerAPI (https://fakerapi.it/en) with the data type chosen by currentUser.
// Data types stored in an enum called FakerResourcesEnum (/services/fakerResources.ts)
const App = () => {
  const [showFakerAPI, setShowFakerAPI] = useState<boolean>(false);
  return <>
    <HomePage setShowFakerAPI={setShowFakerAPI} showFakerAPI={showFakerAPI}>
      <FakerAPIDemo showFakerAPI={showFakerAPI} />
    </HomePage>
  </>;
}
export default App;
