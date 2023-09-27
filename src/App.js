import './App.css';
import About from './components/About';
import CameraScreen from './components/CameraScreen';
import Navber from './components/Navber';
import TextState from './components/context/TextState';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TextState>
      <Router>

      <Navber />

      <Routes>
        <Route exact path="/" element={<CameraScreen />}> </Route>
        <Route exact path="/about" element={<About />}> </Route>
          {/* <Route path="contact" element={<Contact />} /> </Route> */}
      </Routes>


      

    </Router>
    </TextState>
    </div>
  );
}

export default App;
