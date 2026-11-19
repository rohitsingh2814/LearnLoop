import './index.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import About from './pages/About';

export const serverUrl="http://localhost:5000/";

const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/About" element={<About/>}/>

    </Routes>
  )

}

export default App;