import eventlist from '@/components/eventlist';
import React from 'react'

const Eventpage = ({eventdata}) => {
  return (
    <div className='col'>
      <div className='col'>
      {eventdata.name}
      </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  const name  = context.query.name;
  const event = eventlist.find((event) => event.link === name);
  if (event != undefined) {
    return {
      props: {
        eventdata: event,
      },
    };
  } else {
    return {
      props: {
        eventdata: null,
      },
    };
  }
}
export default Eventpage