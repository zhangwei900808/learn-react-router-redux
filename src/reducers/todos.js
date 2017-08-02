const todos = (state = [], action) => {
  console.log('todos state tree is:')
  console.log(state);
  switch (action.type) {
    case 'ADD_TODO':
      let s = [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
      return s;
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos