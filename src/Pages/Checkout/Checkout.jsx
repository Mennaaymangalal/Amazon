import { Button } from "@heroui/button"
import CheckoutProduct from "../../Components/CheckoutProduct/CheckoutProduct"
import { useAuth } from "../../Contexts/GlobalContext/GlobalContext"
import img from '../../assets/imges/checkoutAd.jpg'
import {formatCurrency} from '../../helper/formatCurrency'
import { getBasketTotal } from "../../Contexts/GlobalContext/AppReducer"


export default function Checkout() {
  const { user , basket ,dispatch } = useAuth()
  
   function RemoveBasket(){
    dispatch({
      type:"REMOVE_BASKET"
    })
  }

  return (
    <>
      {
        basket?.length === 0 ? 
      <>
        <div className="mb-4 pt-2 p-5">
            <img src={img} alt="" />
            <div className="pt-4">
          <p className="text-lg font-semibold ">Hello {user ? user?.email :"Guest"}</p>
          <h1 className="text-2xl font-semibold mb-6 pb-4 border-gray-300  text-left border-b-2">Your Shopping Cart</h1>
            </div>
          </div> 
        <div className=" h-full min-h-screen flex  justify-center "> 
        <h1 className="text-xl font-semibold"> You have no items in your basket.To buy one or more
              items,click"Add to basket".</h1>
        </div> 
      </>
        :
    <div className="">       
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">       

        {/* Left Section */}        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Section */}    
            <div className="w-full md:w-3/4"> 
          <div className="mb-4">
            <img src={img} alt="" />
          </div> 

          <p className="text-lg font-semibold ">Hello {user ? user?.email :"Guest"}</p>
          <h1 className="text-2xl font-semibold mb-6 pb-4 border-gray-300  text-left border-b-2">Your Shopping Cart</h1>
           <div className="mb-4 ">
           <Button onClick={RemoveBasket} className='bg-[#cd9042] active:scale-90 transition-transform duration-200'>
              Clear all Basket
           </Button>
   </div>
          
             {  
                     
             basket.map((item , index)=>(
             <div key={index} className="">
               <CheckoutProduct
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating}
               />
             </div>
             ))
         }          
          </div>           
       


          {/* Summary Section */}
          <div className="w-full md:w-1/4">
            <div className="bg-gray-200 border border-gray-300  rounded-lg  p-4 sm:p-6">
               <div className="text-sm">
                <span>Subtotal ( {basket.length} Items): <strong>{formatCurrency(getBasketTotal(basket))}</strong></span>                
              </div>            
               <div className="">
                 <input  className="w-3 h-3" id="checkbox" type="checkbox" />
                <label className="text-xs text-center"  htmlFor="checkbox"> This order contain a gift</label>
               
               </div>
            <div className="flex items-center justify-center">
              <Button className="w-full h-8 py-2 px-4 mt-4 rounded-none bg-[#cd9042] text-xs">
                Proceed to Checkout
              </Button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
         </div>
      }
    </>
  )
}
