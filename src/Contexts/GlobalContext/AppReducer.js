
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
    case "REMOVE_FROM_BASKET" :
        const index = state.basket.findIndex(
            (basketItem)=> basketItem.id === action.id
        )

        let newBasket = [...state.basket]
        
        if(index >= 0){
            newBasket.splice(index,1)
        }
        return{
            ...state ,
            basket: newBasket
        }

        


        default : return state
 }
}

 export default AppReducer