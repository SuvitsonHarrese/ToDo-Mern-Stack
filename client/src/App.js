// import logo from './logo.svg';
import './App.css';

// components 
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Header></Header>
      <TodoForm></TodoForm>
      <Todos></Todos>
    </div>
  );
}

export default App;
