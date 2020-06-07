import React from 'react'
import './cellsStyle.css'
import Cols from './Cols.js';



//rows function takes the state of from app and 
//creates an array of <tableCell> which is the columns (row additions - horizontal)
//and returns copies the vertical columns of the horizontal lines
//props are the ammoint of rows (horizontal elements) 
const Rows = (props) =>{
    let cols = []; 
    let cellColorChange = props.colorToggle;
    for(let i = 0; i < props.colAmt; i++){
        cols.push(<Cols allColor ={props.allColor}  style = {props.style} colorToggle = {cellColorChange} bgColor = {props.bgColor}/>)
    }
//return a cols number of  rows of the colomns
    return (
        <tr>{cols}</tr>
    )
}

export default Rows
