import { HeroUIProvider } from '@heroui/system'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout/MainLayout'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import NotFound from './Pages/NotFound/NotFound'
import Orders from './Pages/Orders/Orders'
import GlobalProvider, { useAuth } from './Contexts/GlobalContext/GlobalContext'
import Checkout from './Pages/Checkout/Checkout'
import Payment from './Pages/Payment/Payment'




export default function App() {
 
  const router = createBrowserRouter([
    {path:'login' , element:<Login/>},
    {path:'/' , element:<MainLayout/> , children:[
      {index:true , element:<Home/>},      
      {path:'*', element:<NotFound/>},
      {path:'orders', element:<Orders/>},
      {path:'checkout', element:<Checkout/>},
      { path: 'payment', element: <Payment /> },
    ]}
  ])

    return (
    <>
      <GlobalProvider>
       <HeroUIProvider>
      <RouterProvider router={router}></RouterProvider>
      </HeroUIProvider>
      </GlobalProvider>     
     
    </>
  )
}
