import React from 'react'; 

//Table cell acts as the columns (row additions - horizontal)
const  Cols = (props) =>{
     //ac acts as the toggle to change the color of all or just the selected cell
        const ac = (props.allColor) ? props.style: null
//props.colorToggle toggles the colorchange function on App.js
    return <td
            draggable = 'true'
            onDragStart={props.colorToggle}
            onDragOver = {props.colorToggle}
            id = "cell"
            style = {ac}>
           </td>  
}

export default Cols; 