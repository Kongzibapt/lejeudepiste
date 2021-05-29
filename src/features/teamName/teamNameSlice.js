import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import adress from '../../adress';

export const teamNameSlice = createSlice({
    name: 'teamName',
    initialState:{
        value:'',
        errors:''
    },
    reducers:{
        change: (state,action) => {
            console.log(action.payload);
            state.value = action.payload 
            let bodyFormData = new FormData();
            bodyFormData.set('name',action.payload);
            axios.post(adress + 'teams',bodyFormData)
            .then(res=>{

            })
            .catch(error => {
                state.errors = error.response.data.errors
            })
        },
    },
})

export const {change} = teamNameSlice.actions

export default teamNameSlice.reducer;