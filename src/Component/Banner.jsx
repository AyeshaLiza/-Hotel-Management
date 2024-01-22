
import banner2 from '../assets/banner/banner2.jpg'

import { Parallax } from 'react-parallax';
const Banner = () => {
  return (
    <>


<Parallax
        // blur={{ min: -15, max: 15 }}
        bgImage={banner2}
        bgImageAlt="the dog"
        strength={-500}
    >
    <div className='max-w-xl my-60  mx-auto'> 
    <h1 className='text-5xl pb-6 font-semibold '>
          {/* Experience Tranquility and Elegance */}
        </h1>
        <p className=''>
{/* 
Indulge in the art of hospitality at Luxe Horizon Hotel, where luxury meets comfort. Nestled in the heart of [City Name], our hotel invites you to a world of sophistication and serenity. */}
</p>
    </div>
        <div style={{ height: '100px' }} />
    </Parallax>


     
    </>
  );
};

export default Banner;