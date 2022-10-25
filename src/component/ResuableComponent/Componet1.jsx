import Component2 from "./Componet2";

const Componet1 = () => {
  const array1 = [
    { name: "satm", email: "abc@com", contact: 534 },
    { name: "asam", email: "afgfbc@com", contact: 14534 },
    { name: "gfdsam", email: "agfbc@com", contact: 534 },
    { name: "sream", email: "agfbc@com", contact: 534 },
    { name: "saram", email: "agfbc@com", contact: 5664 },
  ];
  return (
    <>
      <h1>Reusable Componet</h1>

      {array1.map((item) => {
       return  <Component2 datapass={item}/>
       
      })}

      <h1>-------------------------------------------------</h1>
    </>
  );
};

export default Componet1;
