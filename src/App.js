import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './Component/Table';

function App() {
const [dataTable,setDataTable]=useState([]);
console.log(dataTable);
  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then((res)=>setDataTable(res.data))
    .catch((err)=>{console.log(err)})
  },[])

  const column=[
    {heading:'Name'},
    {heading:'Email'},
    {heading:'Phone'}
  ]
  return (
    <div className="App">
      <h1>Dynamic Table</h1>
      <Table data={dataTable} column={column}/>
    </div>
  );
}

export default App;
