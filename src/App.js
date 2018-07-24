import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './component/Table'

class App extends Component {
  render() {

    const tableHeadData = ['id', 'name', 'age', 'sex'],
          tableBodyData = [
            ['2018072301', 'aaa', '11', 'male'],
            ['2018072301', 'bbb', '12', 'male'],
            ['2018072301', 'cccc', '11', 'female'],
            ['2018072301', 'ddd', '11', 'female'],
            ['2018072301', 'eeee', '11', 'male']
          ]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {!!tableBodyData.length && <Table tableHeadData={tableHeadData} tableBodyData={tableBodyData}/>}
      </div>
    );
  }
}

export default App;
