
export const getBasketTotal = (basket) => {
  return basket.reduce((amount, item) => amount + item.price, 0)
}


export const initialState = {
    user: null ,
    basket : []
}
  const AppReducer = (state = initialState , action) => {
 switch (action.type) {
    case  "SET_USER" :
        return {
            ...state ,
            user: action.user 
        }
    case "ADD_TO_BASKET" :
        return {
            ...state ,
            basket: [ ...state.basket , action.item] 
        }    

        default : return state
 }
}

 export default AppReducer