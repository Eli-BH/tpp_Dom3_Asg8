import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rows from './components/Rows.js'



class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currColor: '', 
      tableRow: 1,
      tableCol: 1, 
    }
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


  
  
  render(){
      

    return(
      <div>
        <button onClick={() => this.handleRows()}>Add rows</button>
        <button onClick={() => this.handleCols()}>Add cols</button>
        <button onClick={() => this.handleDecRows()}>Remove rows</button>
        <button onClick={() => this.handleDecCols()}>Remove cols</button>
        <table>
          <Rows rowAmt = {this.state.tableRow} colAmt = {this.state.tableCol} bg='red'/>
        </table>
        <h1>{this.state.tableRow}</h1>
        <h1>{this.state.tableCol}</h1>
      </div>
    )
  }
}


export default App;
