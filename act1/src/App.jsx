import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const search = (event) => {
    setText(event.target.value);
    
  };

  const filtro = products.filter((product) =>
    product.title.toLowerCase().startsWith(text.toLowerCase())
  );
  

  return (
    <>
      <input type="text" onChange={search} />
      <ul>
        {filtro.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
