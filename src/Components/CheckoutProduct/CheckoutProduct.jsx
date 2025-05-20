import { Button } from '@heroui/button'
import starIcon from '../../assets/icons/star.png'
import { useAuth } from '../../Contexts/GlobalContext/GlobalContext'


export default function CheckoutProduct({ id , title , image , price , rating }) {
  
  const { dispatch } = useAuth()

  function handleRemoveFromBasket(){
    dispatch({
      type:"REMOVE_FROM_BASKET" ,
      id: id
    })
  }
 
  return (
    <>  
    <div className="bg-white mb-4 grid grid-cols-1 md:grid-cols-5 gap-4 rounded-lg shadow-md p-4 items-center">
      
      {/* Product Image */}
      <div className="md:col-span-1 flex justify-center">
        <img src={image} alt="product" className="h-28 w-auto object-contain" />
      </div>

      {/* Product Details */}
      <div className="md:col-span-4 flex flex-col justify-between gap-2">
        <h2 className="leading-tight text-sm font-extrabold">{title}</h2>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <img key={i} src={starIcon} alt="⭐" className="w-4 h-4" />
            ))}
        </div>

        {/* Price */}
        <p className="text-base font-medium">${price}</p>

        {/* Optional Actions */}
        <div>
          <Button onClick={handleRemoveFromBasket} className="bg-[#cd9042] active:scale-90 transition-transform duration-200">
            Remove from Basket
          </Button>
        </div>
      </div>
    </div> 
    </>
  )
}
