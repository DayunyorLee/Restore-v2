import { Product } from "../../app/models/product"
import ProductList from "./ProductLIst";



type Props = {
products: Product[];
}

export default function Catalog({products}: Props) {
  return (
    <>
 <ProductList products={products}/>
  </>
  )
}