import './index.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
// import Auth from './pages/Auth';

const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      

    </Routes>
  )

}

export default App;