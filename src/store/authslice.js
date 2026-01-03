import { createSlice } from "@reduxjs/toolkit";

const newcode =createSlice({
      name:"newcode",
      initialState:{
        status:false,
        statuss:false
      },
      reducers:{
        loginstate:(state)=>{
            state.status=true;
        },
        signupstate:(state)=>{
            state.statuss=true;
        }
      }

})

export const {loginstate}=newcode.actions

export {newcode}