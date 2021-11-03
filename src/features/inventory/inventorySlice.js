import {createSlice} from '@reduxjs/toolkit'

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState:{
        value:[
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
            {"name":"bonus","possessed":false},
        ],
    },
    reducers:{
        add: (state,action) => {
            console.log(action.payload);
            let trouvé = false;
            let index = 0;
            let goodValue = 0;
            while (!trouvé && index <state.value.length){
                if (action.payload === state.value[index].name){
                    goodValue = index;
                    trouvé = true;
                }
                index++;
            }
            if (trouvé){
                state.value[goodValue] = {"name":action.payload,"possessed":true};
            }
        },
    },
})

export const {add} = inventorySlice.actions

export default inventorySlice.reducer;