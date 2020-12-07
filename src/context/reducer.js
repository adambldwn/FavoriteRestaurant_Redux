export function reducer(state,action){
    switch(action.type){
        case "ADD_TO_FAVORITE":
            //             1.YOL
            // const newList = [...state.favoriteList];
            // newList.push(action.payload.selectedRestaurant);
            // state.favoriteList = newList;
            // return { ...state }
            // // // // // // // // // // // // // 
            //            2.YOL
            return {
                ...state,
                favoriteList: [...state.favoriteList, action.payload.selectedRestaurant]
            }

        default:
            return state;
    }
}