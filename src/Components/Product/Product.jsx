import { Button } from '@heroui/button'
import starIcon from '../../assets/icons/star.png'
import { useAuth } from '../../Contexts/GlobalContext/GlobalContext'



export default function Product({id , title , image , price , rating}) {

  const { dispatch } = useAuth()
  function handleAddToBasket(){
    dispatch({
      type: "ADD_TO_BASKET" ,
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating
      }
    })
  }   
  return (
    <>
  
  <div className="bg-white z-[1] p-6 hover:bg-[#131921] hover:text-white transition-all group rounded-md shadow-md flex flex-col justify-between min-h-[420px]">
  {/* Title & Price */}
  <div className="flex flex-col gap-2">
    <p className="text-sm ">{title}</p>
    <p className="text-lg font-semibold">
      <strong>${price}</strong>
    </p>   
  </div>

    <div className="flex ">
      {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={starIcon} className='w-5 h-5'/>
            </p>
          ))}
   </div>
 

  {/* Image */}
  <div className="flex justify-center items-center my-4 flex-grow">
    <img
      src={image}
      alt="product"
      className="w-full max-w-[200px] h-auto group-hover:scale-110 transition-transform duration-300"
    />
  </div>

  {/* Button */}
  <div className="flex justify-center mt-4">
   <Button onClick={handleAddToBasket} className="bg-[#cd9042] active:scale-90 transition-transform duration-200">
     Add to Basket
   </Button>
  </div>
</div>

  


    </>
  )
}
