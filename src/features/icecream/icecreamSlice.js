import {createSlice} from "@reduxjs/toolkit";
import {ordered as cakeOrdered} from '../cake/cakeSlice'

const initialState = {
    numOfIcecream: 20
}

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecream--
        },
        restored: (state, action) => {
            state.numOfIcecream += action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecream--
        })
    }
})

export default icecreamSlice.reducer;
export const {ordered, restored} = icecreamSlice.actions