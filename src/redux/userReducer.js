const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    userData: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        selectedUser: (state, action) => {
            state.userData = action.payload
        },
    },
})

export const { selectedUser } = userSlice.actions

export default userSlice.reducer