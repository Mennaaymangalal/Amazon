import shortid from 'shortid'
import header from '../../assets/imges/home.jpg'
import Product from '../../Components/Product/Product'
import ProductImg1 from '../../assets/products/1.png'
import ProductImg2 from '../../assets/products/2.png'
import ProductImg3 from '../../assets/products/3.png'
import ProductImg4 from '../../assets/products/4.png'
import ProductImg5 from '../../assets/products/5.png'
import ProductImg6 from '../../assets/products/6.png'

export default function Home() {
  return (
    <>
     <div    
      style={{
       WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',    
      }}
      >
     <img
    className="md:-mb-[150px] -mb-[50px]"
       src={header}
       alt="header-img"
       />
      </div>
      
       {/* product Layout */}

        <div className="flex flex-col gap-4 my-6 mx-4">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          <Product
           id={shortid.generate()}
           image={ProductImg1}
           title= "Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black" 
           price={64}
           rating={5}
           />
          <Product
           id={shortid.generate()}
           image={ProductImg2}
           title= "Lenovo - 2021 - IdeaPad 3 - Gaming Laptop - AMD Ryzen 5 5600H - 8GB RAM - 256GB Storage - NVIDIA GeForce GTX 1650-15.6 FHD Display - Windows 11 Home"
           price={682.95}
           rating={4}
          />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
            <Product
           id={shortid.generate()}
           image={ProductImg3}
           title= "Fujitsu ScanSnap iX1600 Wireless or USB High-Speed Cloud Enabled Document, Photo & Receipt Scanner with Large Touchscreen and Auto Document Feeder for Mac or PC, White"
           price={449}
           rating={4}
            />
            <Product
           id={shortid.generate()}
           image={ProductImg4}
           title= "Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
           price={229}
           rating={3}
            />
            <Product
           id={shortid.generate()}
           image={ProductImg5}
           title= "MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB Portable Mini Desktop Computer Stick Business & Home Video Support HDMI 4K 60Hz, BT4.2, 2.4G/5.8G Dual Band Wi-Fi, USB, Ethernet..."
           price={239}
           rating={5}
            />
          </div>

          <div className="grid grid-cols-1">
            <Product
           id={shortid.generate()}
           image={ProductImg6}
           title= "SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black"
           price={(1, 142)}
           rating={5}
            />
          </div>            
        </div>
     
    </>
  )
}
