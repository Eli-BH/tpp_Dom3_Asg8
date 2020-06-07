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
      bgColor: 'white' 
    }
    //handelers to add and remove rows and columns

    this.handleRows = this.handleRows.bind(this);
    this.handleCols = this.handleCols.bind(this);
    this.handleDecRows = this.handleDecRows.bind(this);
    this.handleDecCols = this.handleDecCols.bind(this);
  }


  handleRows(){
    this.setState(
      {tableRow: this.state.tableRow + 1}
    );
  }

  handleDecRows(){
    this.setState(
      {tableRow: this.state.tableRow - 1}
    );
  }

  handleCols(){
    this.setState(
      {tableCol: this.state.tableCol + 1}
    );
  }

  handleDecCols(){
    this.setState(
      {tableCol: this.state.tableCol - 1}
    );
  }

  colorSelect = (event) =>{
    this.setState(
      {bgColor: event.target.value}
    );
  }
  
  changeColor = (event) => {
    event.target.style.backgroundColor = this.state.bgColor 
  }

  
  
  render(){

    const rows = []; 
     for(let i = 0; i < this.state.tableRow; i++){
       rows.push(<Rows colAmt = {this.state.tableCol} colorToggle={this.changeColor} bgColor={this.bgColor}/>)
     }

     console.log(this.state.bgColor);

    return(
      <div className ='wrapper'>
        <div className = 'heading'>
          <h1>React Dom 3</h1> 
        </div>
        <hr />
        <div className = 'buttons'>
          <button onClick={() => this.handleRows()}>Add rows</button> 
          <button onClick={() => this.handleCols()}>Add cols</button>
          <button onClick={() => this.handleDecRows()}>Remove rows</button>
          <button onClick={() => this.handleDecCols()}>Remove cols</button>
          <select onChange = {this.colorSelect}>
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

          <h1>Rows: {this.state.tableRow} Columns: {this.state.tableCol}</h1>
          <table>
            {rows}
          </table>

      </div>
    )
  }
}


export default App;
