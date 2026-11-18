import './index.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';

export const serverUrl="http://localhost:5000/";

const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/profile" element={<Profile/>}/>

    </Routes>
  )

}

export default App;