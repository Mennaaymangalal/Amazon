import { HeroUIProvider } from '@heroui/system'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout/MainLayout'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import NotFound from './Pages/NotFound/NotFound'

export default function App() {

  const router = createBrowserRouter([
    {path:'/' , element:<MainLayout/> , children:[
      {index:true , element:<Home/>},
      {path:'login' , element:<Login/>},
      {path:'*', element:<NotFound/>},
    ]}
  ])

  return (
    <>
      <HeroUIProvider>
      <RouterProvider router={router}></RouterProvider>
      </HeroUIProvider>
     
    </>
  )
}
