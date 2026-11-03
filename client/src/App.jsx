import './index.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
// import Auth from './pages/Auth';

export const serverUrl="http://localhost:5000/";

const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      

    </Routes>
  )

}

export default App;