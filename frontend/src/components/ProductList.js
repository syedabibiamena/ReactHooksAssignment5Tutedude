import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import "./ProductList.css";

const ProductList = () => {
  const { data: products, loading, error } = useFetch(
    "localhost:3000"
  );

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (showLoading || loading) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>;
  }

  if (error) return <p>Error: {error}</p>;
  if (!products || products.length === 0) return <p>No products found</p>;

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
