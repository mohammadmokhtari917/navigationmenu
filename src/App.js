import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Menu from '../src/components/navigationMenu';
import Equipments from '../src/components/Menu/Equipments';
import Pictures from '../src/components/Menu/Pictures';
import Security from '../src/components/Menu/Security';
import Shift from '../src/components/Menu/Shift';
import Standards from '../src/components/Menu/Standards';
import TagSetup from '../src/components/Menu/TagSetup';
import UoM from '../src/components/Menu/UoM';
import Plant from '../src/components/Menu/plant';


// This information is taken from the database
const navitems=[
  {name:'GENERAL',drop:['Pictures','Standards','TagSetup','UoM','Equipments']},
  {name:'PLANT',drop:['db1','db2','db3']},
  {name:'USER',drop:['Security','Shift']}
               ]

function App() {
  return (
    <BrowserRouter>
    <React.Fragment> 
    {/* This is the navigation menu component */}
      <div className='menudiv'>
        <Menu navlist={navitems}/>
      </div>

      {/* These are routing codes */}
      <div className='componentdiv'>
        <Routes>
          <Route path='/Pictures' element={<Pictures />}/>
          <Route path='/Standards' element={<Standards />}/>
          <Route path='/TagSetup' element={<TagSetup />}/>
          <Route path='/UoM' element={<UoM />}/>
          <Route path='/Equipments' element={<Equipments />}/>
          <Route path="/Plant/*" element={<Plant name={window.location.href}/>}/>
          <Route path='/Security' element={<Security />}/>
          <Route path='/Shift' element={<Shift />}/>
        </Routes>
      </div>
    </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
