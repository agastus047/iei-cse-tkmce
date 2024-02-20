import { EffectCoverflow, Pagination} from 'swiper/modules';
import Eventcard from './Eventcard';
import eventlist from './eventlist';
import Carousel from 'react-material-ui-carousel';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Events = () =>{


  return(
    <div className='py-8 px-8 '>
    <p className='text-[#393e46] text-center sm:mb-10 mb-2 font-extrabold   md:text-6xl sm:text-4xl text-2xl'>Events</p>
    <div className='w-full md:px-8 lg:px-32 xl:px-80'>
    <Carousel interval='3500' animation='slide' duration='850'
    NavButton={({onClick, next, prev}) => {
    // Other logic

    return (
        <Button onClick={onClick} className="top-1/3 " >
            {next && <ArrowForwardIosIcon sx={{ color: '#000000', '&:hover': { color: '#ffffff' } }} />}
            {prev && <ArrowBackIosNewIcon sx={{ color: '#000000', '&:hover': { color: '#ffffff' } }}/>}
        </Button>
    )
}}
indicatorIconButtonProps={{
    style: {
        padding: '10px',    // 1
        color: 'black'       // 3
    }
}}

activeIndicatorIconButtonProps={{
    style: {
        color: '#00adb5' // 2
    }
}}

fullHeightHover={false}
>

        {
            eventlist.map(item => <Eventcard key={item.id} items={item} /> )
        }
    </Carousel>
</div>
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