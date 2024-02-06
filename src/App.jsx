import './App.css'
import FilmsList from './components/filmslist'
import {useState} from "react";

function App(props)
 {
const [list2, setList] = useState(["ready","set","go"]);
const [text, setText] = useState("");


  function onSubmit2(event){ 
    {
    event.preventDefault();  
    let list2 = [...list2, text];
    setList({list2: list2, text: ""});
  }
  }
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={onSubmit2}>
          <input 
          type="text" 
          id="todoInput"
          name="todoInput"
          value={text}
          onChange={(changeEvent) => {
            setText({text: changeEvent.target.value});
          }}
          />
          <button type="submit">Add</button>
        </form>  
        <ul>{list2.map((element,index) => {return <li key={element+index}>{element}</li>})}</ul>
      <FilmsList />
      </div>
    )
  }

//prior version as class app
/*
import React, {Component} from "react";
import './App.css'
import FilmsList from './components/filmslist'

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      list: ["ready","set","go"],
      text: ""
    }
    this.onSubmit2 = this.onSubmit2.bind(this);
  }

  onSubmit2(event){ 
    {
    event.preventDefault();  
    let list2 = [...this.state.list, this.state.text];
    this.setState({list: list2, text: ""});
  }
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit2}>
          <input 
          type="text" 
          id="todoInput"
          name="todoInput"
          value={this.state.text}
          onChange={(changeEvent) => {
            this.setState({text: changeEvent.target.value});
          }}
          />
          <button type="submit">Add</button>
        </form>  
        <ul>{this.state.list.map((element,index) => {return <li key={element+index}>{element}</li>})}</ul>
      <FilmsList />
      </div>
    )
  }
}
*/
//prior version from lesson intro to react
/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>This is a second header</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>This is a test</p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul> 
             </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/

export default App
