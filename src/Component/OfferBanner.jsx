
import dining from '../assets/featured/dining.jpg'
import dining2 from '../assets/featured/dining2.jpg'
import naure from '../assets/featured/naure.jpg'

const OfferBanner = () => {
 

 return (
  <div>
     <div className="carousel w-full">
     <div id="slide1" className="carousel-item relative w-full h-[500px] gap-5">
    <img src={dining2} className="w-full rounded-lg h-[500px]" />
    <div className="absolute flex items-center h-full rounded-lg justify-start   left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className='text-white space-y-4 max-w-lg pl-14'>
        <p className='text-6xl text-amber-500'>Romantic dinner for two and a bottle of wine included</p>
       <h2 className='text-4xl font-semibold '>
       special honeymoon packages with <span className='text-blue-500 text-7xl'> 10%</span> discount
       </h2>
       <h2 className='text-4xl font-medium'>Promocode: HoneyMoon</h2>
       <button className="btn btn-warning btn-outline"> Book Now</button>
      </div>
    </div>
 
  </div>
  <div id="slide2" className="carousel-item relative w-full h-[500px]">
    <img src={dining}   className="w-full h-[500px] rounded-lg" />
    <div className="absolute rounded-lg flex items-center h-full justify-start   left-0 top-0 bottom-0 bg-gradient-to-r from-[#968B89] ">
      <div className='text-white space-y-4 max-w-lg pl-14'>
       <p className='text-6xl font-semibold '><span className='text-7xl text-blue-600 '>15% </span>off for early bird bookings</p>
       <p className='text-4xl text-amber-500'>Special weekend rates available</p>
       <h2 className='text-4xl font-medium'>
       PromoCode: HAPPY23
       </h2 >
       <button className="btn btn-warning btn-outline"> Book Now</button>
      </div>
    </div>
   
  </div> 
   
  <div id="slide3" className="carousel-item relative w-full h-[500px]">
    <img src={naure} className="w-full rounded-lg h-[500px]" />
    <div className="absolute flex items-center h-full rounded-lg justify-start   left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className='text-white space-y-7 max-w-lg pl-14'>
       <h2 className='text-6xl font-semibold '>
       <span className='text-red-500 text-7xl'>15% </span>off for corporate bookings (proof of employment required)
       </h2>
       <p className='text-4xl text-amber-500'>Complimentary breakfast for your entire stay</p>
       <h2 className='text-2xl font-medium'>PromoCode: HAPPY24</h2>
       <button className="btn btn-warning btn-outline">Book Now</button>
      </div>
    </div>
  
  </div> 

</div>
<div className="flex  transform -translate-y-1/2transform -translate-y-1/2 justify-center w-full py-2 gap-2">
  <a href="#slide1" className="btn btn-xs">1</a> 
  <a href="#slide2" className="btn btn-xs">2</a> 
  <a href="#slide3" className="btn btn-xs">3</a>
</div>
  </div>
 );
};

export default OfferBanner;