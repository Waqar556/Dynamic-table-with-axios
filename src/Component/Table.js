import React from 'react'
import './table.css'

const Table = ({data,column}) => {
  return (
    <table> 
        <thead><tr>{column.map((item,index)=><th>{item.heading}</th>)}</tr></thead>
        <tbody>
            {data.map((data,index)=><tr><td>{data.name}</td><td>{data.email}</td><td>{data.phone}</td></tr>)}
            
        </tbody>
    </table>
  )
}

export default Table