import { UserState } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
    id: 0,
    username: '',
    email: '',
    avatar: ''
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginAction: (state, action: PayloadAction<UserState>) => {
            const { id, username, email, avatar } = action.payload

            state.id = id
            state.username = username
            state.email = email
            state.avatar = avatar
        },
        logoutAction: (state) => {
            state.id = 0
            state.username = ''
            state.email = ''
            state.avatar = ''
        }
    }
})

export const { loginAction, logoutAction } = userSlice.actions
export default userSlice.reducer