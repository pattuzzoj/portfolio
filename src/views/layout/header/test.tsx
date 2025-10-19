import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth); // usa API do navegador
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <p>Width: {width}px</p>
    </div>
  );
}
