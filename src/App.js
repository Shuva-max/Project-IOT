import './App.css';
import CameraScreen from './components/CameraScreen';
import Navber from './components/Navber';
import TextState from './components/context/TextState';

function App() {
  return (
    <div className="App">
      <TextState>
      

      <Navber />

      <CameraScreen/>


    </TextState>
    </div>
  );
}

export default App;
