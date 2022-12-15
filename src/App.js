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
import UseMemoHook from "./component/React_Hooks/UseMemoHook";
import UseREF from "./component/React_Hooks/UseREF";

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

//Pure Component
import Pure_Component from "./component/PureComponent/Pure_Component";

//Ref
import REF from "./component/Ref/REF";

//Forward ref
import ParentForwardFolder from "./component/ForwardRef/ParentForwardFolder";

//Types of Components
import ControlledComponent from "./component/ComponentTYPES/ControlledComponent";
import UncontrolledComponent from "./component/ComponentTYPES/UncontrolledComponent";

//HOC
import HOC1 from "./component/HOC/HOC1";

//React Routers
import Basics from "./component/React_RouTers/Basics";
import PageNotFound from "./component/React_RouTers/PageNotFound";

//Dynamic__routing
import Page1 from "./component/Dynamic__Routing/Page1";

//Get API Method
import GetMethod from "./component/GetApiMethod/GetMethod";

// PostApiMethod
import PostApiMethod from "./component/PostApiMethod/PostApiMethod"

//All HOOks
import AllHooks from "./component/ALL_HOOKS/AllHooks";








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
      <UseMemoHook />
      <UseREF />

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

      {/* Pure Component */}
      <Pure_Component />

      {/* Ref */}
      <REF />

      {/* Forward ref */}
      <ParentForwardFolder />

      {/* Types of Components */}
      <ControlledComponent />
      <UncontrolledComponent />

      {/* HOC */}
      <HOC1 />

      {/* React Routers */}
      <Basics />
      <PageNotFound />

      {/* Dynamic__Routing */}
      <Page1 />

      {/* Get API Method */}
      <GetMethod />

      {/* PostApiMethod */}
      <PostApiMethod/>

      {/* All Hooks ---- */}
      <AllHooks/>
    </div>
  );
}

export default App;
