import '../AdditionalFiles/App.css';
import * as React from "react";
import { useEffect, useState } from 'react';


//This is the API url to fetch from
const API_URL = 'https://matchesfashion.com/api/products';
const TAX_RATE = 0.08;

function YourSolution() {

  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [maximumPage, setMaximumPage] = useState(0);

  useEffect(() => {
    fetch(`${API_URL}?page=${currentPage}`)
    .then((response) => response.json())
    .then((body) => {
      setProductData(body.products)
      setMaximumPage(Math.ceil(body.count / 10) - 1)
    })
    .catch(err => console.log(err, 'ERROR'));

  }, [currentPage]);

  const handleClick = (pageChange) => {
    if (Math.abs(pageChange) === 1) {
      setCurrentPage((current) => current + pageChange)
    } else {
   setCurrentPage(pageChange)
    }
  }

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
      <button disabled={currentPage === 0} onClick={() => handleClick(0)}>First Page</button>
      <button disabled={currentPage === 0} onClick={() => handleClick(-1)}> Previous Page</button>
      <button disabled={currentPage === maximumPage} onClick={() => handleClick(1)}>Next Page</button>
      <button disabled={currentPage === maximumPage} onClick={() => handleClick(maximumPage)}>Last Page</button>
    </div>
  );
}

export default YourSolution;
