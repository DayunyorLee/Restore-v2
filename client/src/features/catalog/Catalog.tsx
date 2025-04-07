/*import { useEffect, useState } from "react";*/
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";
import { useFetchProductsQuery } from "./catalogApi";



export default function Catalog() {
const {data, isLoading} = useFetchProductsQuery();

if(isLoading || !data) return <div>Loading...</div>

  /*    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
      fetch('https://localhost:5185/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
    }, [])
    */
  return (
    <>
 <ProductList products={data}/>
  </>
  )
}