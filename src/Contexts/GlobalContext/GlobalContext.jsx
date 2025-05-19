import  { createContext, useContext, useEffect, useReducer } from 'react'
import AppReducer, { initialState } from './AppReducer'
import { auth } from '../../firebase'

const GlobalContext = createContext()


export default function GlobalProvider({children}) {
    const [state, dispatch] = useReducer(AppReducer , initialState)   
 

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
     if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })       
  },[])

  return (
    <GlobalContext.Provider value={{basket:state.basket , user:state.user , dispatch:dispatch}}>
      {children}
    </GlobalContext.Provider>  
  )
}

export const useAuth = ()=>{
  return useContext(GlobalContext)
}
