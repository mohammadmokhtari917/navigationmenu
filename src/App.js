import React from 'react';
import './App.css';
import Menu from '../src/components/Menu/navigationMenu';
//import {BrowserRouter,Routes,Route} from 'react-router-dom';

const navitems=[
  {name:'GENERAL',drop:['Pictures','Standards','TagSetup','UoM','Equipments']},
  {name:'PLANT',drop:['db1','db2','db3']},
  {name:'USER',drop:['Security','Shift']}
               ]
function App() {
  return (
    <React.Fragment> 
      <div className='menudiv'>
        <Menu navlist={navitems}/>
      </div>
      <div className='componentdiv'>

      </div>
    </React.Fragment>
  );
}

export default App;
