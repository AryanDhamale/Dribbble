import { createSlice } from "@reduxjs/toolkit";

export const sideNavcontrolSlice= createSlice({
    name : "sideNavcontrol",
    initialState : {value:false},
    reducers : {
        setVisible:(state)=> {state.value = !state.value}
    }
});


export const {setVisible} = sideNavcontrolSlice.actions;

export default sideNavcontrolSlice.reducer;
