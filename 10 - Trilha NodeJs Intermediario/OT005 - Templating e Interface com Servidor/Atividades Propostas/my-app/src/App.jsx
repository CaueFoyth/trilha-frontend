import React, { useState } from 'react';

export default function App({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <h1>Contador Híbrido SSR + CSR</h1>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
