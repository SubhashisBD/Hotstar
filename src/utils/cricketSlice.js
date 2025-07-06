import { createSlice } from "@reduxjs/toolkit";


const cricketSlice = createSlice(
    {
        name:"cricket",
        initialState:{
            indEngland :null
        },
        reducers:{
            addindEngland:(state,action) => {
                state.indEngland = action.payload;
            }
        }
    }
);

export const {addindEngland} =cricketSlice.actions;
export default cricketSlice.reducer;