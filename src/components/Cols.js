import React from 'react'; 

//Table cell acts as the columns (row additions - horizontal)
const  Cols = (props) =>{
     
        const ac = (props.allColor) ? props.style: null

    return <td
            onClick={props.colorToggle}
            id = "cell"
            style = {ac}>
           </td>  
}

export default Cols; 