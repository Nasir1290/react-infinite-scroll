import React, { useEffect, useRef, useState } from "react";
import Product from "./Product";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);
  console.log(products);
  const produrctsPerPage = 10;
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${produrctsPerPage}&skip=${
          produrctsPerPage * page
        }`
      );

      const data = await response.json();

      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setPage((prevPage) => prevPage + 1);
      }
    };

    const onInterSection = (items) => {
      const loaderItem = items[0];
      if (loaderItem.isIntersecting && hasMore) {
        fetchProducts();
      }
    };

    const observer = new IntersectionObserver(onInterSection);

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // cleanup
    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasMore, page]);

  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-gradient-to-r from-sky-500 to-purple-500 font-bold text-white text-lg">
      <h1>Product List</h1>
      <div className=" grid grid-col lg:grid-cols-3 md:grid-cols-2 gap-2 ">
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            thumbnail={product.thumbnail}
            price={product.price}
          />
        ))}
      </div>
      {hasMore && <div className=" m-3 bg-slate-500 p-2 rounded-md" ref={loaderRef}> Loading Products....</div>}
    </div>
  );
};

export default ProductsList;
