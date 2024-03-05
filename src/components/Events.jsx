import { useState } from 'react';
import { EffectCoverflow, Pagination} from 'swiper/modules';
import Eventcard from './Eventcard';
import eventlist from '../data/eventlist';
import Carousel from 'react-material-ui-carousel';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Events = () => {
  const [eventsToShow, setEventsToShow] = useState(eventlist.slice(0, 4)); 

  return (
    <div className='py-8 px-8 '>
      <p className='text-[#393e46] text-center sm:mb-10 mb-2 font-extrabold md:text-6xl sm:text-4xl text-2xl'>Events</p>
      <div className='w-full md:px-8 lg:px-32 xl:px-80'>
        <Carousel interval='3500' animation='slide' duration='850'
          NavButton={({ onClick, next, prev }) => {
            // Other logic
            return (
              <Button onClick={onClick} className="top-1/3 " >
                {next && <ArrowForwardIosIcon sx={{ color: '#000000', '&:hover': { color: '#ffffff' } }} />}
                {prev && <ArrowBackIosNewIcon sx={{ color: '#000000', '&:hover': { color: '#ffffff' } }} />}
              </Button>
            )
          }}
          indicatorIconButtonProps={{
            style: {
              padding: '10px',
              color: 'black'
            }
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: '#00adb5'
            }
          }}
          fullHeightHover={false}
        >
          {
            eventsToShow.map(item => <Eventcard key={item.id} items={item} />)
          }
        </Carousel>
      </div>
    </div>
  )
}

export default Events;
