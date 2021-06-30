import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "../ProductCard/ProductCard";

import ProductGrid from "../ProductGrid/ProductGrid";
import Sortfilter from "../Sortfilter/Sortfilter";
const Product = () => {
  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://buyist.herokuapp.com/api/product")
      .then((res) => setProductArray(res.data.array));
  }, []);

  return (
    <div className="w-full">
      <Sortfilter />
      <ProductGrid>
        {productArray === [] ? (
          <div>Fetching Products</div>
        ) : (
          productArray.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </ProductGrid>
    </div>
  );
};

export default Product;
