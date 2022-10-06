import './App.css';
import { BasicsClass } from "./component/BasicsClass"
import Parent from './component/Parent';
import Counter from "./component/Counter";
import Todo from './component/Todo';
import GetInputBoxValue from "./component/GetInputBoxValue"
function App() {
  return (
    <div className="App">
      <BasicsClass />
      {<Parent />}
      {<Counter />}
      <Todo />
      <div>
        <GetInputBoxValue />
      </div>
    </div>
  );
}

export default App;
