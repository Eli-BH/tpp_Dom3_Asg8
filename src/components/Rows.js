import React from 'react'
import './cellsStyle.css'
import TableCell from './TableCell.js';




const Rows = (props) =>{
    let cols = []; 
    for(let i = 0; i < props.colAmt; i++){
        cols.push(<TableCell/>)
    }

    return (
        <tr>{cols}</tr>
    )
}

export default Rows
