import { useState } from 'react';

function Counter() 
{ const [count, setCount] = useState(0);
 const handleIncrement = () => {
 setCount(count + 1);
 };
 return (
 <div>
 <p>You clicked {count} times</p>
 <button onClick={handleIncrement}>Click me</button>
 </div>
 );
}
export default Counter;
