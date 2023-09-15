import './App.css';
import Home from './comp/home';

import { BrowserRouter, Route, Routes} from 'react-router-dom';


 
function App() {
  return (
    
    <>
 <BrowserRouter>
 

        <Routes>
          

          {/* <Route path='/meetmate' element={<Mainpage/>} /> */}
          <Route path='/' element={<Home/>} />
          
        </Routes>
        

      {/* <Animationdm/> */}
     
       </BrowserRouter>

       </>
    
  );
}

export default App;