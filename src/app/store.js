import {configureStore} from "@reduxjs/toolkit"
import cakeSlice from "../features/cake/cakeSlice"
import icecreamSlice from "../features/icecream/icecreamSlice"
import userSlice from "../features/users/userSlice"

const store = configureStore({
    reducer: {
        cake: cakeSlice,
        icecream: icecreamSlice,
        user: userSlice
    }
})

export default store;