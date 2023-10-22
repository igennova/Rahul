import logo from './logo.svg';
import './App.css';
import Sidebar1 from './Components/Side bar';
import { Route,Routes } from 'react-router';
import { Fragment } from 'react';
import Tender from './Components/Tender';
import Home from './Components/Home';
import NavigationBar from './Components/navbar';

function App() {
  return(
    <Fragment>
      
    
  
    <Routes>
      <Route path='/tender' element={<Tender/>}></Route>
      { <Route path='/' element={<Home/>}></Route> }
     
    </Routes>
 
</Fragment>
  
  
  )
    
}

export default App;
