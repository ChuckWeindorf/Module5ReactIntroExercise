import {useState} from "react";

function HomePage(props)
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
        <ul>
            {list2.map((element,index) => 
               {return <li key={element+index}>{element}</li>})}</ul>
      </div>
    )
  }

  export {HomePage};