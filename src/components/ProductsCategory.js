import React, { useEffect, useState } from "react";

const ProductsCategory = () => {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    fetch("https://dummyjson.com/products/category/laptops")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  return (
    <div>
      <h1>Laptop Products</h1>
      {products.length > 0 && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Discount Percentage: {product.discountPercentage}%</p>
              <img src={product.thumbnail} alt={product.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductsCategory;
