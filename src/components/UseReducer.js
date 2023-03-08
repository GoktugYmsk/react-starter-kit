import React, { useReducer } from 'react';

const ADD_TODO = 'ADD_TODO';
const SET_TODO = 'SET_TODO';

function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case SET_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    default:
      return state;
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(todoReducer, { todos: [], todo: '' });

  const submitHandle = e => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: state.todo,
    });
    dispatch({ type: SET_TODO, payload: '' });
  }

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input type="text" value={state.todo} onChange={e => dispatch({ type: SET_TODO, payload: e.target.value })} />
        <button type="submit">ekle</button>
      </form>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseReducer;
