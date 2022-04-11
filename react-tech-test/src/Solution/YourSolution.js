import '../AdditionalFiles/App.css';
import * as React from "react";
import { useEffect, useState } from 'react';


//This is the API url to fetch from
const API_URL = 'https://matchesfashion.com/api/products';
const TAX_RATE = 0.08;

function YourSolution() {

  const [productData, setProductData] = useState([]);


  useEffect(() => {
    fetch(`${API_URL}?page=0`)
    .then((response) => response.json())
    .then((body) => {
      setProductData(body.products)
    
    })
    .catch(err => console.log(err, 'ERROR'));

  }, []);

    return (
    <div className="App">
      <table id="products">
        <thead>
        <tr>
          <th>Id</th>
          <th>Brand</th>
          <th>Name</th>
          <th>Quantity Sold</th>
          <th>Sold Price</th>
          <th>Cost To Business</th>
        </tr>
        </thead>
          <tbody>
          {productData.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.brand}</td>
                <td>{product.name}</td>
                <td>{product.quantitySold}</td>
                <td>{product.soldPrice}</td>
                <td>{product.costToBusiness}</td>
              </tr>
            ))}
          </tbody>
      </table>
      <button>First Page</button>
      <button>Previous Page</button>
      <button>Next Page</button>
      <button>Last Page</button>
    </div>
  );
}

export default YourSolution;
