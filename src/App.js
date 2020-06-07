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
      bgColor: '' 
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


  
  
  render(){

    const rows = []; 
     for(let i = 0; i < this.state.tableRow; i++){
       rows.push(<Rows colAmt = {this.state.tableCol} bgColor={this.bgColor}/>)
     }

     console.log(this.state.bgColor);

    return(
      <div>
        <button onClick={() => this.handleRows()}>Add rows</button> 
        <button onClick={() => this.handleCols()}>Add cols</button>
        <button onClick={() => this.handleDecRows()}>Remove rows</button>
        <button onClick={() => this.handleDecCols()}>Remove cols</button>
        <select onChange = {this.colorSelect}>
           <option value='black'>Black</option>
           <option value='brown'>Brown</option>
           <option value='red'>Red</option>
           <option value='orange'>Orange</option>
           <option value='yellow'>Yellow</option>
           <option value='green'>Green</option>
           <option value='blue'>Blue</option>
           <option value='purple'>Purple</option>
           <option value='grey'>Grey</option>
           <option value='fuschia'>Fuschia</option>  
        </select>
        <h1>Rows: {this.state.tableRow} Columns: {this.state.tableCol}</h1>
        <table>
          {rows}
        </table>
        
      </div>
    )
  }
}


export default App;
