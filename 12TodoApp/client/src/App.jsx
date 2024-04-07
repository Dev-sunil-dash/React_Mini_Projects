import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('/api/todos')
      .then(res => setTodos(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/todos', { text });
      setTodos([...todos, res.data]);
      setText('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
