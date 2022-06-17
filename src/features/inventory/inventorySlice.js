import {createSlice} from '@reduxjs/toolkit'


export const inventorySlice = createSlice({
    name: 'inventory',
    initialState:{
        value:[
            {"name":"Boussole","possessed":false,"usable":false,"combinable":false},
            {"name":"Page déchirée","possessed":true,"usable":false,"combinable":false},
            {"name":"Coffre","possessed":true,"usable":false,"combinable":false},
            {"name":"Cactus","possessed":false,"usable":false,"combinable":false},
            {"name":"Blason","possessed":false,"usable":false,"combinable":false},
            {"name":"Coffre","possessed":true,"usable":false,"combinable":false},
            {"name":"Liste","possessed":true,"usable":false,"combinable":false},
            {"name":"Couronne","possessed":true,"usable":false,"combinable":false},
            {"name":"Coffre avec inscription","possessed":true,"usable":false,"combinable":false},
            {"name":"Miroir","possessed":true,"usable":false,"combinable":false},
            {"name":"bonus","possessed":false,"usable":false,"combinable":false},
            {"name":"bonus","possessed":false,"usable":false,"combinable":false},
            {"name":"bonus","possessed":false,"usable":false,"combinable":false},
            {"name":"bonus","possessed":false,"usable":false,"combinable":false},
            {"name":"bonus","possessed":false,"usable":false,"combinable":false},
            {"name":"bonus","possessed":false,"usable":false,"combinable":false},
            {"name":"bonus","possessed":false,"usable":false,"combinable":false},
            {"name":"bonus","possessed":false,"usable":false,"combinable":false},
            {"name":"bonus","possessed":false,"usable":false,"combinable":false},
            {"name":"bonus","possessed":false,"usable":false,"combinable":false}
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
                state.value[goodValue] = {"name":action.payload,"possessed":true,"usable":state.value[goodValue].usable,"combinable":state.value[goodValue].combinable};
            }
        },
        setUsable: (state,action) => {
            console.log(action.payload);
            let trouvé = false;
            let goodValue = 0;
            for (let i = 0; i < state.value.length; i++) {
                if (action.payload === state.value[i].name && state.value[i].possessed){
                    goodValue = i;
                    trouvé = true;
                }
            }
            if (trouvé){
                state.value[goodValue] = {"name":action.payload,"possessed":state.value[goodValue].possessed,"usable":true,"combinable":state.value[goodValue].combinable};
            }
        },
        setUsed: (state,action) => {
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
                state.value[goodValue] = {"name":action.payload,"possessed":state.value[goodValue].possessed,"usable":false,"combinable":state.value[goodValue].combinable};
            }
        },
        setCombinable: (state,action) => {
            console.log(action.payload);
            let trouvé = false;
            let goodValue = 0;
            for (let i = 0; i < state.value.length; i++) {
                if (action.payload === state.value[i].name && state.value[i].possessed){
                    goodValue = i;
                    trouvé = true;
                }
            }
            if (trouvé){
                state.value[goodValue] = {"name":action.payload,"possessed":state.value[goodValue].possessed,"usable":state.value[goodValue].usable,"combinable":true};
            }
        },
    },
})

export const {add} = inventorySlice.actions;
export const {setUsable} = inventorySlice.actions;
export const {setUsed} = inventorySlice.actions;
export const {setCombinable} = inventorySlice.actions;

export default inventorySlice.reducer;