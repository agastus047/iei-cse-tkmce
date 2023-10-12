import { Swiper, SwiperSlide,Responsive } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import Eventcard from './Eventcard';
import eventlist from './eventlist';

const Events = () =>{


  const cards = eventlist.map(item => (
    <SwiperSlide className=' bg-center bg-cover'>
          <Eventcard items={item}/>
        </SwiperSlide>
));

  return(
    <div className="flex flex-col">
       <div className="text-5xl mx-auto mt-10  font-bold text-[#393E46]">EVENTS</div>
       <div><Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-full my-20 h-96"
      >
        
    {cards}
  
    </Swiper></div>
      </div>
  )
}

export default Events





// {['Slide 1','Slide 1','Slide 1','Slide 1','Slide 1','Slide 1','Slide 1','Slide 1'].map(([title]) =>{
//   <p>{title}</p>

//  })}
// .swiper {
//   width: 100%;
//   padding-top: 50px;
//   padding-bottom: 50px;
// }

// .swiper-slide {
//   background-position: center;
//   background-size: cover;
//   width: 300px;
//   height: 300px;
// }

// .swiper-slide img {
//   display: block;
//   width: 100%;
// }

{/* <SwiperSlide className=' bg-center bg-cover'>
          <Eventcard/>
        </SwiperSlide>
        <SwiperSlide className='w-80 h-80 bg-center bg-cover'>
        <Eventcard/>
        </SwiperSlide>
        <SwiperSlide className='w-80 h-80 bg-center bg-cover'>
        <Eventcard/>
        </SwiperSlide>
        <SwiperSlide className='w-80 h-80 bg-center bg-cover'>
        <Eventcard/>
        </SwiperSlide>
        <SwiperSlide className='w-80 h-80 bg-center bg-cover'>
        <Eventcard/>
        </SwiperSlide> */}

        {/* <Responsive breakpoints={{
    // When the screen width is less than 640px (mobile size)
    640: {
      slidesPerView: 1, // Set slidesPerView to 1
    },
    // When the screen width is greater than or equal to 641px (other screen sizes)
    641: {
      slidesPerView: 3, // Set slidesPerView to 3 (or your desired value)
    },
  }}> 
  </Responsive>*/}