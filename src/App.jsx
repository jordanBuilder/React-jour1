import { useState } from "react"
import Input from "./components/input";



function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  
  const handleClick = () => {
    if (value.trim()) {
      setTodos((prevTodos) => [...prevTodos, value]);
      console.log(todos);
    } else {
      alert("Entrez un Todo")
    }
  }
  console.log("hello state");
    return (
    <>
      <div>
        <Input value={value} onChange={setValue} onClick={handleClick}/>
      </div>
      <div>
        <p>Vos Todos: </p>
          {todos.length > 0 ? (
            todos.map((todo, index) => <p key={index}> {todo} {index}</p>)
        ):(<p>Aucun Todo ajouté</p>)}
      </div>
    </>
  )
}

export default App
