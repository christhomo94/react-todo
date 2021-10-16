import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Todo #1"/>
      <Todo title="Todo #2"/>
      <Todo title="Todo #3" />
      <Todo title="Todo #4"/>
      <Modal />
      <Backdrop />
      
    </div> 
  );
}

export default App;
