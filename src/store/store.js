import { configureStore } from "@reduxjs/toolkit";

import { newcode } from "./authslice";

const store=configureStore({
    reducer:{
        newcode:newcode.reducer,
    }
})

export {store}