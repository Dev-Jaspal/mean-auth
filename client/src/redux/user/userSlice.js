import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    loading:false,
    error:false,
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        signInStart: (state) =>{
            state.loading = true;
        },
        signInSuccess: (state, action) =>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        signInFaliure: (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        },
        updateUserInStart: (state) =>{
            state.loading = true;
        },
        updateUserInSuccess: (state, action) =>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        updateUserInFaliure: (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        },
        deleteUserStart: (state) =>{
            state.loading = true;
        },
        deleteUserSuccess: (state, action) =>{
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        },
       deleteUserFaliure: (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        },
        signOut: (state) =>{
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        }
    }
});

export const 
{ 
    signInStart, 
    signInSuccess, 
    signInFaliure, 
    updateUserInSuccess, 
    updateUserInFaliure, 
    updateUserInStart,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFaliure,
    signOut
} = userSlice.actions;

export default userSlice.reducer;