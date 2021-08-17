import { useState } from "react";
import React from "react";

function Counter() {
   const [count, setCount] = useState(0);

   function incr() {
      setCount(count + 1);
   }
   function decr() {
      setCount(count - 1);
   }
   return (
      <div>
         <p>Klac {count} raz</p>
         <button onClick={incr}>+</button>
         <button onClick={decr}>-</button>
      </div>
   );
}
export default Counter;
