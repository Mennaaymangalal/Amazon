
import { Button, Checkbox, Input } from '@heroui/react'
import logo from '../../assets/imges/login-logo.png'
import { Link } from 'react-router-dom'
import {auth} from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useAuth } from '../../Contexts/GlobalContext/GlobalContext'

export default function Login() {
  const {user} = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
   function handleRegister(e){
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password)
   }
   console.log(user)
  return (
    <>
  <div className=" py-6 flex flex-col items-center">
  <Link to={"/"} className="w-[120px]">
    <img src={logo} alt="logo" />
  </Link>
  <div className='py-3 rounded-medium px-4 mt-5 border-1 border-gray-300  w-3/4 md:w-2/6 lg:w-3/12'>
   <h2 className='font-semibold text-xl py-4 '>Sign in</h2>

   <form action="" className=''>  

    <div className="flex flex-col  gap-4 w-full">
     {/*email input  */}
    <div className="">       
    <label htmlFor="email" className="mb-1 text-sm font-medium text-black">
    Email
  </label>
  <input
    onChange={(e)=> setEmail(e.target.value)} 
    value={email} 
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
     onChange={(e)=>setPassword(e.target.value)}
    value={password}
    type="password"
    id="password"   
    className="w-full h-8 px-3 py-2 border border-black bg-white text-black text-sm "
  />
 </div>
 {/* login button */}
 <Button type='submit'  className='rounded-none bg-[#cd9042] h-8'>
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
 <Button onClick={handleRegister} type='submit' className='rounded-none mb-2 h-8'>
 Create your Amazon Account
 </Button>

    </div>  
  </form>
  </div>
  
</div>

    </>
  )
}
