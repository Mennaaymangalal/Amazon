import { useAuth } from "../../Contexts/GlobalContext/GlobalContext"
import img from '../../assets/imges/checkoutAd.jpg'


export default function Checkout() {
  const { user , basket } = useAuth()


  return (
    <>
      {
        basket?.length === 0 ? 
        <div className=" h-full min-h-screen flex items-center justify-center "> 
        <h1 className="text-2xl font-semibold">No Products in your Cart</h1>
        </div> 
        :
    <div className="">       
    <div className=" min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">       

        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Section */}          
          <div className="w-full md:w-3/4"> 
          <div className="mb-4">
            <img src={img} alt="" />
          </div> 
          <p className="text-lg font-semibold ">Hello {user ? user?.email :"Guest"}</p>
          <h1 className="text-2xl font-semibold mb-6 text-center md:text-left">Your Shopping Cart</h1>

            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b">
                    <th className="text-left font-semibold py-2">Product</th>
                    <th className="text-left font-semibold py-2">Price</th>
                    <th className="text-left font-semibold py-2">Quantity</th>
                    <th className="text-left font-semibold py-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4">
                      <div className="flex items-center">
                        <img
                          className="h-16 w-16 object-cover mr-4"
                          src="https://via.placeholder.com/150"
                          alt="Product"
                        />
                        <span className="font-medium text-sm">Product name</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm">$19.99</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <button className="border rounded-md py-1 px-3 text-sm">-</button>
                        <span className="mx-3 w-6 text-center text-sm">1</span>
                        <button className="border rounded-md py-1 px-3 text-sm">+</button>
                      </div>
                    </td>
                    <td className="py-4 text-sm">$19.99</td>
                  </tr>
                  {/* Additional product rows go here */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary Section */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>

              <div className="flex justify-between mb-2 text-sm">
                <span>Subtotal</span>
                <span>$19.99</span>
              </div>
              <div className="flex justify-between mb-2 text-sm">
                <span>Taxes</span>
                <span>$1.99</span>
              </div>
              <div className="flex justify-between mb-2 text-sm">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>

              <hr className="my-2" />

              <div className="flex justify-between mb-2 font-semibold text-sm">
                <span>Total</span>
                <span>$21.98</span>
              </div>

              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 w-full text-sm">
                Checkout
              </button>
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
