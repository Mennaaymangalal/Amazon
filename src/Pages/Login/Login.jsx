
import { Button, Checkbox, Input } from '@heroui/react'
import logo from '../../assets/imges/login-logo.png'

export default function Login() {
  return (
    <>
  <div className="py-6 flex flex-col items-center">
  <div className="w-[120px]">
    <img src={logo} alt="logo" />
  </div>
  <div className='py-3 rounded-medium px-4 mt-5 border-1 w-3/4 md:w-2/6 lg:w-3/12'>
   <h2 className='font-semibold text-xl py-4 '>Sign in</h2>

   <form action="" className=''>  

    <div className="flex flex-col  gap-4 w-full">
     {/*email input  */}
    <div className="">       
    <label htmlFor="email" className="mb-1 text-sm font-medium text-black">
    Email
  </label>
  <input
    type="email"
    id="email"   
    className="w-full h-8 px-3 py-2 border border-black bg-white text-black text-sm "
  />
    </div>
   
   {/* password input */}
 <div className="">
     <label htmlFor="password" className=" mb-1 text-sm font-medium text-black">
    Password
  </label>
  <input
    type="password"
    id="password"   
    className="w-full h-8 px-3 py-2 border border-black bg-white text-black text-sm "
  />
 </div>
 {/* login button */}
 <Button type='submit'  className='rounded-none bg-[#f3a847] h-8'>
  Sign in
 </Button>
 {/* checkbox */}
 <div className="">
 <label className="flex items-start gap-2  text-xs leading-tight text-[#555]">
 
  <p>
    By continuing, you agree to Amazon’s{" "}
    <span className="text-blue-600 hover:underline cursor-pointer">
      Conditions of Use
    </span>{" "}
    and{" "}
    <span className="text-blue-600 hover:underline cursor-pointer">
      Privacy Notice
    </span>.
  </p>
</label>
 </div>
 
 {/* signup button */}
 <Button type='submit' className='rounded-none mb-2 h-8'>
 Create your Amazon Account
 </Button>

    </div>  
  </form>
  </div>
  
</div>

    </>
  )
}
