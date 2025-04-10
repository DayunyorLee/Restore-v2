import { Box,  Button,  Paper, Typography, } from "@mui/material";
import { useFetchFiltersQuery } from "./catalogApi"
import Search from "./Search";
import RadioButtonGroup from "../../app/shared/components/RadioButtonGroup";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { resetParams, setBrand, setOrderBy, setTypes } from "./catalogSlice";
import CheckboxButtons from "../../app/shared/components/CheckboxButtons";

const sortOptions = [
    {value: 'name', label: 'Alphabetical'},
    {value: 'priceDesc', label: 'Price: High to low'},
    {value: 'price', label: 'Price: Low to high'},

]

type Props = {
    filtersData: {brands: string[]; types: string[];}
}
export default function Filters({filtersData: data}: Props) {


    const {orderBy, types, brands} = useAppSelector(state => state.catalog)
    const dispatch = useAppDispatch();

    if(!data?.brands || !data.types) return <Typography>Loading...</Typography>

    return (
       <Box display='flex' flexDirection='column' gap={3}>
            <Paper>
             <Search />
            </Paper>
            <Paper sx={{p: 3}}>
            <RadioButtonGroup 
            selectedValue={orderBy}
            options={sortOptions}
            onChange={e => dispatch(setOrderBy(e.target.value))}
            />
            </Paper>
            <Paper sx={{p:3}}>
              <CheckboxButtons 
                items={data.brands}
                checked={brands}
                onChange={(items: string[]) => dispatch(setBrand(items))}
              />
            </Paper>
            <Paper sx={{p:3}}>
            <CheckboxButtons 
                items={data.types}
                checked={types}
                onChange={(items: string[]) => dispatch(setTypes(items))}
              />
            </Paper>
            <Button onClick={() => dispatch(resetParams())}>Reset filters</Button>
       </Box>
    )
  
}