import { Input } from "@heroui/react";
import logo from '../../assets/imges/header-logo.png'
import shoppingCart from '../../assets/icons/shopping-cart.png'
import React from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarMenuToggle,
//   NavbarMenuItem,
//   NavbarMenu,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
//   Input,
// } from "@heroui/react";

export const SearchIcon = ({size = 24, strokeWidth = 1.5, width, height, ...props}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
      className="text-black bg-[#F3A847] rounded-none h-full px-2 cursor-pointer"     
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};


export default function Header() {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  

  return (
    <>
    <div className="bg-[#131921] text-white text-center py-2  px-6 flex justify-between align-middle">

      <div className="w-[120px] shrink-0">
      <img src={logo} alt="logo" className="w-full object-contain" />
      </div>

      <div className="flex-1 px-2">
         <Input
          classNames={{
            base: "w-full h-10",
            mainWrapper: "h-full",
            input: "text-small placeholder-white",
           inputWrapper:
           "h-full w-full rounded-none pe-0 font-normal text-default-500 bg-white flex items-center",

              
          }}
          placeholder="Search Amazon.eg"
          size="sm"
          endContent={<SearchIcon size={35} />}
          type="search"
        />
      </div>

      <div className="flex gap-6 text-left">
         <div className="flex flex-col">
          <p className="text-sm font-light ">Hello Guest</p>
          <h3 className="text-sm font-semibold">Sign in</h3>
         </div>
          <div className="flex flex-col">
          <p className="text-sm font-light ">Returns</p>
          <h3 className="text-sm font-semibold">& Orders</h3>
         </div>
          <div className="flex flex-col">
          <p className="text-sm font-light ">Your</p>
          <h3 className="text-sm font-semibold">Prime</h3>
         </div>
          <div className="flex flex-col align-middle">
          <img src={shoppingCart} alt="shoppingCart" />
         </div>
        </div>

    </div>
    </>  
  );
}


 // <Navbar className="w-full " shouldHideOnScroll isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
    //   <NavbarContent className="sm:hidden" justify="start">
    //     <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
    //   </NavbarContent>

    //   <NavbarContent className="sm:hidden " justify="start" >
    //     <NavbarBrand>         
    //       <p className="font-bold text-inherit">AMAZON</p>
    //     </NavbarBrand>
    //   </NavbarContent>

    //   <NavbarContent className="hidden m-0 p-0 sm:flex" justify="start">
    //     <NavbarBrand>          
    //       <p className=" font-bold text-inherit">AMAZON</p>
    //     </NavbarBrand>         
    //   </NavbarContent>

    //     <NavbarItem className="w-full max-w-full flex"  justify="center">
    //        <Input
    //       classNames={{
    //         base: "w-full h-10",
    //         mainWrapper: "h-full",
    //         input: "text-small",
    //        inputWrapper:
    //        "h-full w-full rounded-none pe-0 font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 flex items-center",

              
    //       }}
    //       placeholder="Search Amazon.eg"
    //       size="sm"
    //       endContent={<SearchIcon size={35} />}
    //       type="search"
    //     />
    //     </NavbarItem> 

    //   <NavbarContent justify="end">
    //     <NavbarItem className="hidden lg:flex">
    //       <Link href="#">Login</Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Button as={Link} color="warning" href="#" variant="flat">
    //         Sign Up
    //       </Button>
    //     </NavbarItem>
    //   </NavbarContent>

    //   <NavbarMenu>
    //     {menuItems.map((item, index) => ( 
    //       <NavbarMenuItem onClick={() => setIsMenuOpen(false)} key={`${item}-${index}`}>
    //         <Link
    //           className="w-full"
    //           color={"foreground"}
    //           href="#"
    //           size="lg"
    //         >
    //           {item}
    //         </Link>
    //       </NavbarMenuItem>
    //     ))}
    //   </NavbarMenu>
    // </Navbar>