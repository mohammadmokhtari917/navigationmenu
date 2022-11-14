import React from 'react';
import './App.css';
import Menu from '../src/components/Menu/navigationMenu';

const navitems=[
  {name:'GENERAL',drop:['Pictures','Standards','Tag Setup','UoM','Equipments']},
  {name:'PLANT',drop:['db1','db2','db3']},
  {name:'USER',drop:['Security','Shift']}
               ]
function App() {
  return (
    <React.Fragment> 
        <Menu navlist={navitems}/>
    </React.Fragment>
  );
}

export default App;
