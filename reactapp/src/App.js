// import React, {useState} from "react";

// function App()
// {
//   const [count, setCount] = useState(0);
//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//     <h1>React Counter</h1>
//     <p>{count}</p>
//     <button onClick={()=> setCount(count  + 1)}>Incerement</button>
//     <button onClick={()=> setCount(count  - 1)} style={{marginLeft : '10px'}}>Decrement</button>

// </div>
//   );
// }

// export default App;

import React, {useState} from "react";

function App()
{
  const[todo, setTodo] = useState('');
  const[todos, setTodos] = useState([]);

  const HandleAddTodo = (e) =>
  {
    e.preventDefault(); // Prevent page reload
    if(todo.trim === '')
    {
      return;
    }
    setTodos([...todos, todo]);
    setTodo('');
  }

  const handleRemoveTodo = (index) =>
  {
setTodos(todos.filter((_,i)=> i!==index));
  }

  return (

    <div style={{ textAlign : 'center', marginTop : '50px'}}>
<h1>React Todo List</h1>

<form onSubmit={HandleAddTodo}>
  <input placeholder="Enter Item" type="text" value= {todo} onChange={(e) => setTodo(e.target.value)}>
  </input>
  <button type="submit"> Add Task</button>
</form>

<ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((task, index) => (
          <li key={index} style={{ marginTop: '10px' }}>
            {task}
            <button
              onClick={() => handleRemoveTodo(index)}
              style={{ marginLeft: '10px' }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>



    </div>


  );

}

export default App;