import React,{useState} from "react";

function App() {
  const [text , setText] = useState("");
  const [items , setItems] = useState([]);

   function handleChange(event) {
    const value = event.target.value;
    setText(value);
   }

  function addText(){
   setItems(prevItems =>{
    return [...prevItems , text];
   });
   setText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input  onChange={handleChange} type="text" />
        <button onClick={addText}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map (todoItems => {
            return <li>{todoItems}</li>;
          })
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
