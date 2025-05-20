import { Link } from "react-router-dom"
import { useAuth } from "../../Contexts/GlobalContext/GlobalContext"
import {Button, Input} from "@heroui/react";
import CheckoutProduct from "../../Components/CheckoutProduct/CheckoutProduct";
import { formatCurrency } from "../../helper/formatCurrency";
import { getBasketTotal } from "../../Contexts/GlobalContext/AppReducer";

export default function Payment() {
    const { basket } = useAuth()
  return (
    <>
   <div className="min-h-screen">
  <h1 className="text-center my-6 font-semibold text-2xl">
    Checkout (
    <Link to="/checkout">
      <span className="text-blue-900 active:text-red-600">{basket.length} items</span>
    </Link>
    )
  </h1>

  <div className="bg-white grid grid-cols-1 gap-8 px-6 py-8">
    {/* Delivery address */}
    <div className="border rounded shadow-sm">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/5 p-4">
          <h3 className="font-semibold text-xl">Delivery Address</h3>
        </div>
        <div className="w-full md:w-4/5 pt-2 p-4">         
          <Input label="Email" type="email" variant="underlined" />
           <Input label="Full Address" type="text" variant="underlined" className="mt-4" />
        </div>
      </div>
    </div>

    {/* Review items */}
    <div className="border border-gray-300 rounded shadow-sm">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/5 p-4">
          <h3 className="font-semibold text-xl">Review Items</h3>
        </div>
       {
        basket.length == 0 ?
        <div className="flex  items-center">
             <h3 className="text-center font-semibold text-md">No Items in your Basket.</h3> 
        </div>
          : 
         <div className="w-full md:w-4/5 p-4">          
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
          
        </div>     }
      </div>
    </div>

    {/* Payment method */}
   <div className="border border-gray-300 rounded shadow-sm">
  <div className="flex flex-col md:flex-row w-full">
    {/* Left title column */}
    <div className="w-full md:w-1/5 p-4">
      <h3 className="font-semibold text-xl">Payment Method</h3>
    </div>

    {/* Right inputs */}
    <div className="w-full md:w-4/5 p-4 flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <Input label="Card Number" type="text" variant="underlined" className="w-full sm:w-1/3" />
        <Input label="Expiration Date" type="text" variant="underlined" className="w-full sm:w-1/3" />
        <Input label="CVV" type="text" variant="underlined" className="w-full sm:w-1/3" />
      </div>

      {/* Order total */}
      <div className="text-md font-bold">
        Order Total: <span >{formatCurrency(getBasketTotal(basket))}</span>        
      </div>
      <div className="">
        <Button className="w-full  shadow-inner h-8 py-2 px-4 mt-4 rounded-none bg-[#cd9042] text-xs">
            Buy Now
        </Button>
      </div>
    </div>
  </div>
</div>

  </div>
</div>

    </>
  )
}
