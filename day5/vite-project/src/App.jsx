import Header from "./components/Header";
import Para from "./components/para";
import Product from "./components/product";
import { useState } from "react";

const App = ({name="red",age="18",city="coimbatore"}) => {
  const [count,setCount]=useState(0);
  return (
    <div>
      <h1>hello world</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>add</button>
      <button onClick={() => setCount(count - 1)}>sub</button>
      <Header/>
      <Para/>
      <Product/>
    </div>
  )
}
export default App
