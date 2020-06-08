import React from 'react';
import './App.css';
import Rows from './components/Rows.js'



class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currColor: '', 
      tableRow: 1,
      tableCol: 1,
      bgColor: 'black',
      allColor: false 
    }
    //handelers to add and remove rows and columns

    this.handleRows = this.handleRows.bind(this);
    this.handleCols = this.handleCols.bind(this);
    this.handleDecRows = this.handleDecRows.bind(this);
    this.handleDecCols = this.handleDecCols.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

//adds rows
  handleRows(){
    this.setState(
      {tableRow: this.state.tableRow + 1}
    );
  }
//decreases rows
  handleDecRows(){
    this.setState(
      {tableRow: this.state.tableRow - 1}
    );
  }
//adds columns 
  handleCols(){
    this.setState(
      {tableCol: this.state.tableCol + 1}
    );
  }
//decrements columns 
  handleDecCols(){
    this.setState(
      {tableCol: this.state.tableCol - 1}
    );
  }
//function to select a color
  colorSelect = (event) =>{
    this.setState(
      {bgColor: event.target.value}
    );
  }
  //function to change to the selected color
  changeColor = (event) => {
    event.target.style.backgroundColor = this.state.bgColor 
  }
  //function toggles the all color state, which decides if full colored cells are
  //rendered as opposed to the individually colored cells
  toggleAll = () =>{
    if(this.state.allColor == true){
      this.setState({allColor:false});
    } else {
      this.setState({allColor:true});
    }
  }

  render(){
    //toggles cell background color on render
    const cellStyle = {
      backgroundColor: this.state.bgColor
    }
    //toggles background color off render
    const clearStyle ={
      backgroundColor: null
    }
    const rows = []; 

     for(let i = 0; i < this.state.tableRow; i++){
       (this.state.allColor) ?
          rows.push(<Rows 
          style={ cellStyle}  
          allColor={this.state.allColor} 
          colAmt = {this.state.tableCol} 
          colorToggle={this.changeColor} 
          bgColor={this.bgColor}/>) :
          rows.push(<Rows 
            style={
              clearStyle
            } 
            allColor={this.state.allColor} 
            colAmt = {this.state.tableCol} 
            colorToggle={this.changeColor} 
            bgColor={this.bgColor}/>)

     };

     console.log(this.state.bgColor);

    return(
      <div className ='wrapper'>
        <div className = 'heading'>
          <h1>React Dom 3</h1> 
        </div>
        <hr />
        <div className = 'buttons'>
          <button className ="btn" onClick={() => this.handleRows()}>Add rows</button> 
          <button className ="btn" onClick={() => this.handleCols()}>Add cols</button>
          <button className ="btn" onClick={() => this.handleDecRows()}>Remove rows</button>
          <button className ="btn" onClick={() => this.handleDecCols()}>Remove cols</button>
          <button className ="btn" onClick={() => this.toggleAll()}>Toggle All</button>
           <select className ="btn" onChange = {this.colorSelect}>
             <option value='#000000'>Black</option>
             <option value='#A0522D'>Brown</option>
             <option value='#B22222'>Red</option>
             <option value='#FF8C00'>Orange</option>
             <option value='#FFFF33'>Yellow</option>
             <option value='#008000'>Green</option>
             <option value='#4169E1'>Blue</option>
             <option value='#9400D3'>Purple</option>
             <option value='#808080'>Grey</option>
             <option value='#FF0080'>Fuschia</option>
             <option value='#FFFFF0'>Ivory</option>  
          </select>

        </div>

          <h1 className ='indic'>Rows: {this.state.tableRow} Columns: {this.state.tableCol}</h1>
          <h3 className ='indic'>Click and drag over a cell to 'paint' </h3>
          <table>
            {rows}
          </table>

      </div>
    )
  }
}


export default App;
