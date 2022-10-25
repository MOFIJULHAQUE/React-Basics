import "./App.css";
import { BasicsClass } from "./component/BasicsClass";
import Parent from "./component/Parent";
import Counter from "./component/Counter";
import Todo from "./component/Todo";
import GetInputBoxValue from "./component/GetInputBoxValue";
import HideAndShowElement from "./component/HideAndShowElement";
import BasicForm from "./component/BasicForm";
import Child1 from "./component/SendDataParentToChild/Child1";
//life cycle methode
import ComponentDidmount from "./component/ComponentDidmount";
import Component_Did_Update from "./component/Component_Did_Update";
import ShouldComponentUpdate from "./component/ShouldComponentUpdate";
import ComponentWillUnmount1 from "./component/ComponentWillUnmount/ComponentWillUnmount1";

//Hooks
import UseStateHook from "./component/React_Hooks/UseStateHook";
import UseEffectHuk from "./component/React_Hooks/UseEffectHuk";

//BootStrap
import BootStrapComp from "./component/BootStrapCOMP/BootStrapComp";

//HandleArrayWIthLIST
import HandleArrayWIthLIST from "./component/HandleArrayLIST/HandleArrayWIthLIST";
import ListWIthUniqueKey from "./component/HandleArrayLIST/ListWIthUniqueKey";
import NestedListArray from "./component/HandleArrayLIST/NestedListArray";

//Reusabele Componet
import Component1 from "./component/ResuableComponent/Componet1";

//ChildToParent
import ParentComp from "./component/ChildToParent/ParentComp";
function App() {
  const parentData = () => {
    alert("Data from paren(APP.js)");
  };
  return (
    <div className="App">
      <BasicsClass />
      {<Parent />}
      {<Counter />}
      <Todo />

      <GetInputBoxValue />

      <HideAndShowElement />
      <BasicForm />
      <Child1 data={parentData} />
      
      {/* //life cycle methode  */}
      <ComponentDidmount />
      <Component_Did_Update />
      <ShouldComponentUpdate />
      <ComponentWillUnmount1 />

      {/* Hooks */}
      <UseStateHook />
      <UseEffectHuk />

      {/* BootStrap */}
      <BootStrapComp />

      {/* HandleArrayWIthLIST */}
      <HandleArrayWIthLIST />
      <ListWIthUniqueKey />
      <NestedListArray />

      {/* //Reusabele Componet */}
      <Component1 />

      {/* ChildToParent */}
      <ParentComp />
    </div>
  );
}

export default App;
