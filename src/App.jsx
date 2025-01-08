import { useState } from 'react'
import Input from './components/input';

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handeClick = () => {
    if (value.trim()) {
      setTodos((prevTodos) => ([...prevTodos, value]));
      setValue("");
    } else {
      alert("Veuillez remplir le champs");
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleDelete = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, id) => id !== index));
  }
  return (
    <>
      <Input value={value} onChange={handleChange} onSubmitButton={handeClick} />
      <div>
        <ul>
          Vos Todos: 
        </ul>
        {todos.length == 0 ? (<p>Aucun Todo Ajouté</p>) : (todos.map((todo, index) => (<li key={index}>{todo} <button onClick={() => handleDelete(index)}>Supprimer</button></li>)))}
      </div>
    </>
  )
}

export default App
