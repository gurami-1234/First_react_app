import { useState } from "react";
import MyBtn from "./components/Button.jsx"
import { Button } from "./components/Button.jsx";
function App() {

  const [count,setCount] = useState(6)

  let k = ["Gurami","Davitadze"]
  let [firstName,lastName] = k

  let a = 5
  a=10
  return (
    <div className="App">
      <Button count={count} setCount={setCount} variable={a} />
        {count}
  
      <MyBtn count={count} setCount={setCount} />


      {a}
      <br/>
      
      {/* <button onClick={() =>  a=a+1 } >increase</button> */}
      {/* <button onClick={() => setCount( count + 1 ) } >increase</button>
      {count}
      <button onClick={() => setCount( count - 1 ) } >decrease</button> */}
    </div>
  );
}

export default App;
