import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
// aaaa
function TodoApp() {
  return (
    <div className="Todos-container">
      <Header />
      <InputTodo />
      <TodoList />
    </div>
  );
}

export default TodoApp;
