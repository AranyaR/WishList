import React,{ useState } from 'react';
import Data from './component/Data';
import Wish from './component/Wish';

function App() {
  const [list,Uselist]=useState([])
  function addWish(newWish){
    let arr=[...list,newWish];
    Uselist(arr);
  }
  function toClear(){
    Uselist([]);
  }
  return (
    <div className='box' >
      <Wish addWish={addWish} list={list} toClear={toClear}></Wish>
      <Data list={list} Uselist={Uselist}></Data>
    </div>
  );
}

export default App;
