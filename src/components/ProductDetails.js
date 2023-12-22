import React, { useEffect, useState } from "react";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    fetch("https://dummyjson.com/products/10")
      .then((response) => response.json())
      .then((data) => setProducts([data])) // Wrap the data in an array since it's a single product
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={fetchData}>Product Details BY Id</button>
      {products.length > 0 && (
        <table>
          <thead>
            <tr>
            <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Discount Percentage</th>
                <th>Rating</th>
                <th>Stock</th>
                <th>Brand</th>
                <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
               <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.discountPercentage}</td>
                  <td>{product.rating}</td>
                  <td>{product.stock}</td>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductDetails;
