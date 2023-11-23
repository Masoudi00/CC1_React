import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function ApiCall() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (<>
    <div  className="APii">
      <h1 className='h'>API</h1>
      <ul className='u'>
        {todos.map(todo => (
          <li key={todo.id} className='l'>{todo.title}</li>
        ))}
      </ul>
      <button onClick={handlePreviousPage} className='btn btn-danger '>Précédent</button>
      <button onClick={handleNextPage} className='btn btn-success m-2' >Suivant</button>
    </div>
    </>
  );
}

export default ApiCall;
