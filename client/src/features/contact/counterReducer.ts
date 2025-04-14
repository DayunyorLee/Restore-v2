import { createSlice } from "@reduxjs/toolkit"

export type CounterState ={
    data: number
}
/*
const initialState1: CounterState = {
    data: 42
}
*/
export const CounterSlice = createSlice({
    name: 'counter',
    initialState : {data: 42},
    reducers: {
        increment: (state, action) => {
            state.data += action.payload
        },
        decrement: (state, action) => {
            state.data -= action.payload
        }
    }
})


export const {increment, decrement} = CounterSlice.actions;


export function incrementLegacy(amount = 1){
    return {
        type: 'increment',
        payload: amount
    }
}

export function deccrementLegacy(amount = 1){
    return {
        type: 'decrement',
        payload: amount
    }
}

export default function counterReducer(state = {data: 42}, action: {type: string, payload: number}){
    switch (action.type) {
        case 'increment':
            
            return {
                ...state,
                data: state.data + action.payload
            }
        case 'decrement':
            return {
                ...state,
                data: state.data - action.payload
            }
    
        default:
            return state;
    }
    return state;
}