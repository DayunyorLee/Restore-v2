/*import { useEffect, useState } from "react";*/
import { Grid2, Pagination } from "@mui/material";
import ProductList from "./ProductList";
import { useFetchFiltersQuery, useFetchProductsQuery } from "./catalogApi";
import Filters from "./Filters";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import AppPagination from "../../app/shared/components/AppPagination";
import { setPageNumber } from "./catalogSlice";



export default function Catalog() {
  const productParams = useAppSelector(state => state.catalog)
const {data, isLoading} = useFetchProductsQuery(productParams);
    const {data: filtersData, isLoading: filtersLoading} = useFetchFiltersQuery();
const dispatch = useAppDispatch()

if(isLoading || !data || filtersLoading || !filtersData) return <div>Loading...</div>

  /*    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
      fetch('https://localhost:5185/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
    }, [])
    */
  return (
    <Grid2 container spacing={4}>
      <Grid2 size={3}>
        <Filters filtersData={filtersData}/>
      </Grid2>
      <Grid2 size={9}>
        <ProductList products={data.items}/>
      
      <AppPagination 
      metadata={data.pagination}
      onPageChange={(page: number) =>  {
        
        dispatch(setPageNumber(page))
        window.scrollTo({top: 0, behavior: 'smooth'})

      }}
      />
      </Grid2>
 
  </Grid2>
  )
}