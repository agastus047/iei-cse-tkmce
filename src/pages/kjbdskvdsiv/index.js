import React, { useEffect, useState } from 'react';
import axios from "axios";
import Excelsheet from '@/components/Excelsheet';
import eventlist from '@/data/eventlist';

const Index = () => {
  const [accesskey, setAccesskey] = useState();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const [data, setData] = useState(false);
  const [events, setEvents] = useState([]);
  const [retrieve, setRetrieve] = useState(false);
  const [wrong, setWrong] = useState(false)
  function handlechange(e) {

    setAccesskey({
      ...accesskey,
      key: e.target.value,
    });
  }
  function handleSelect(e) {
    setAccesskey({
      ...accesskey,
      event: e.target.value,
    });
  }

  useEffect(() => {
    setEvents(eventlist);
    if(events){
      setRetrieve(true)
    }else{
      setRetrieve(false)
    }
  }, []);

  async function onSubmit(event) {

    event.preventDefault();
    setLoading(true);
    try {

      const response1 = await axios.post("/api/kjbdskvdsiv", accesskey);
      if (response1.data.data === "Wrong password") {
        setWrong(true)
        setData(false)
      } else {
        setWrong(false)
        setData(true)
        setResponse(response1.data.data);
      }


      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='w-full h-full '>
      <div className='flex flex-col w-full h-full justify-center items-center pt-20'>
        <div className='flex-col'>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Password
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="" onChange={handlechange} />
            <p className="text-red-500 text-xs italic">Please enter a password.</p>
            {wrong ? <><p className="text-red-500 text-xs italic">Wrong password</p></> : <></>}
          </div>

          {retrieve && (
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Select Event
              </label>
              <select onChange={handleSelect}>
                <option value={"null"} >
                  Choose event
                </option>
                {events.map(option => (
                  
                  <option key={option.id} value={option.link} className='text-black'>{option.link}</option>
                ))}
              </select>
            </div>
          )}
          <div className='flex justify-center items-center'>
            {loading ? (
              <button className="bg-nav-bg text-white font-bold p-4 w-40 hover:bg-cyan-500 rounded-full hover:text-black" disabled>
                Loading...
              </button>
            ) : (
              <button className="bg-nav-bg text-white font-bold p-4 w-40 hover:bg-cyan-500 rounded-full hover:text-black" onClick={onSubmit}>
                Login
              </button>
            )}
          </div>
        </div>
        <div className="">
          {response && data ? (
            <Excelsheet excelData={response} fileName={"Excel Export"} />
          ) : (
            <div className="text-center text-gray-500">No data to display.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
