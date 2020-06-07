import React from 'react'
import './cellsStyle.css'
import TableCell from './TableCell.js';




const Rows = (props) =>{
    let cols = [];
    let rows = props.rowAmt;  
    for(let i = 0; i < props.colAmt; i++){
        cols.push(<TableCell rows = {rows}/>)
    }

    return (
        <tr>{cols}</tr>
    )
}

export default Rows
