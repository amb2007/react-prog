import { useState, useEffect } from 'react'
import './App.css'
function app(){
  const [products,setProducts] = useState([]);
  const [text,setText] = useState('');
  const search = (event) =>{
    setText(event.target.value);
    console.log(products.filter((product) => {
      product.title.StartWith(text);
    }))
  }
  useEffect(() =>
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>console.log(json)))
}