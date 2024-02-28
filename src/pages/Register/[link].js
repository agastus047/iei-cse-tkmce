import eventlist from '@/data/eventlist';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Register = () => {
  const router = useRouter();
  const { link } = router.query;
  const eventdata = eventlist.find((event) => event.link === link);

  return (
    <div className='md:flex p-2 border-4 shadow-lg font-Poppins w-full  gap-5 '>
      <div className='md:w-4/12 flex flex-col gap-4 p-4 md:h-screen  justify-center items-center md:min-h-screen   md:sticky  md:top-0'>
        <h1 className='text-4xl font-bold '>{eventdata?.name}</h1>
        <p className="font-semibold">{eventdata?.discription}</p>
      </div>
      <div className="md:w-8/12 w-full  ">
        <form className='flex flex-col justify-center items-center'>
          <div className='flex flex-col gap-5'>
            {eventdata?.isTeamevent?<>{
              Array.from({ length: eventdata?.teammember }).map((_, index) => (
                <div key={index}>
                  <div className="relative z-0  px-2 w-full group">
                    <label className="font-mono uppercase font-bold  text-11  text-gray-900 dark:text-gray-300 bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                      Enter member {index+1}
                    </label>
                    <input
                      type="text"
                      name={`full_name_${index}`}
                      id={`full_name_${index}`}
                      className="h-10 text-[11px]text-10 md:w-3/4 w-full border py-55-rem border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      placeholder=""
                    />
                  </div>
                  <div className="relative z-0  px-2 w-full group">
                    <label className="font-mono uppercase font-bold  text-11  text-gray-900 dark:text-gray-300 bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                      Email
                    </label>
                    <input
                      type="email"
                      name={`email_${index}`}
                      id={`email_${index}`}
                      className="h-10 text-[11px]text-10 border py-55-rem border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-3/4 w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      placeholder=""
                    />
                  </div>
                  <div className="relative z-0  px-2 w-full group">
                    <label className="font-mono uppercase font-bold  text-11  text-gray-900 dark:text-gray-300 bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name={`phone_number_${index}`}
                      id={`phone_number_${index}`}
                      className="h-10 text-[11px]text-10 border py-55-rem border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-3/4 w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      placeholder=""
                    />
                  </div>
                  <div className="relative z-0  px-2 w-full group">
                    <label className="font-mono uppercase font-bold  text-11  text-gray-900 dark:text-gray-300 bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                      College
                    </label>
                    <input
                      type="text"
                      name={`college_${index}`}
                      id={`college_${index}`}
                      className="h-10 text-[11px]text-10 border py-55-rem border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-3/4 w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      placeholder=""
                    />
                  </div>
                  <div>
                    <select
                      name={`year_${index}`}
                      className="md:w-3/4 w-full py-4 rounded-lg gray-bg opacity-75"
                      defaultValue={"null"}
                    >
                      <option value={"null"} disabled>
                        Choose Year
                      </option>
                      <option value={"1"}>1</option>
                      <option value={"2"}>2</option>
                      <option value={"3"}>3</option>
                      <option value={"4"}>4</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name={`branch_${index}`}
                      className="md:w-3/4 w-full py-4 px-1 rounded-lg gray-bg opacity-75"
                      defaultValue={"null"}
                    >
                      <option value={"null"} disabled>
                        Choose Branch
                      </option>
                      <option value={"ece"}>ECE (T)</option>
                      <option value={"mech"}>Mech (M)</option>
                      <option value={"civil"}>Civil (C)</option>
                      <option value={"cs"}>CS (R)</option>
                      <option value={"eee"}>EEE (E)</option>
                      <option value={"chem"}>Chem(H)</option>
                      <option value={"arch"}>Arch(A)</option>
                      <option value={"mech-pro"}>Mech Pro</option>
                      <option value={"electrical&computer"}>ERE</option>
                    </select>
                  </div>
                </div>
              ))
            }
            </>:<><div className="relative z-0  px-2 w-full group">
              <label className="font-mono uppercase font-bold  text-11  text-gray-900 dark:text-gray-300
          bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                Full Name
              </label>
              <input type="text" name="first_name" id="first_name" className="h-10 text-[11px]text-10 md:w-3/4 w-full   border py-55-rem border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="" placeholder="" />
            </div>
            <div className="relative z-0  px-2 w-full group">
              <label className="font-mono uppercase font-bold  text-11  text-gray-900 dark:text-gray-300
          bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                email
              </label>
              <input type="email" name="first_name" id="first_name" className="h-10 text-[11px]text-10   border py-55-rem border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-3/4 w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="" placeholder="" />
            </div>
            <div className="relative z-0  px-2 w-full group">
              <label className="font-mono uppercase font-bold  text-11  text-gray-900 dark:text-gray-300
          bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                Phone Number
              </label>
              <input type="number" name="first_name" id="first_name" className="h-10 text-[11px]text-10   border py-55-rem border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-3/4 w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="" placeholder="" />
            </div>
            <div className="relative z-0  px-2 w-full group">
              <label className="font-mono uppercase font-bold  text-11  text-gray-900 dark:text-gray-300
          bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                College
              </label>
              <input type="text" name="first_name" id="first_name" className="h-10 text-[11px]text-10   border py-55-rem border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-3/4 w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="" placeholder="" />
            </div>
            <div>
              <select
                name="year"
                className="md:w-3/4 w-full py-4 rounded-lg gray-bg opacity-75"
                defaultValue={"null"}
              >
                <option value={"null"} disabled>
                  choose year
                </option>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>

              </select>
            </div>
            <div>
              <select
                name="branch"
                className="md:w-3/4 w-full py-4 px-1 rounded-lg gray-bg opacity-75"
                defaultValue={"null"}
              >
                <option value={"null"} disabled>
                  choose branch
                </option>
                <option value={"ece"}>ECE (T)</option>
                <option value={"mech"}>Mech (M)</option>
                <option value={"civil"}>Civil (C)</option>
                <option value={"cs"}>CS (R)</option>
                <option value={"eee"}>EEE (E)</option>
                <option value={"chem"}>Chem(H)</option>
                <option value={"arch"}>Arch(A)</option>
                <option value={"mech-pro"}>Mech Pro</option>
                <option value={"electrical&computer"}>ERE</option>
              </select>
            </div></>}
            
            <div className="relative z-0  px-2 w-full group">
              <label className="font-mono uppercase font-bold  text-11  text-gray-900 dark:text-gray-300
      bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                IEI membership ID
              </label>
              <input type="text" name="first_name" id="first_name" className="h-10 text-[11px]text-10   border py-55-rem border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-3/4 w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="" placeholder="" />
            </div>
            <div className="relative z-0  px-2 w-full group">
              <label className="font-mono uppercase font-bold  text-11  text-gray-900 dark:text-gray-300
      bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                Referral code
              </label>
              <input type="text" name="first_name" id="first_name" className="h-10 text-[11px]text-10   border py-55-rem border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-3/4 w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="" placeholder="" />
            </div>
            <div className='flex flex-col'>
              {
                eventdata?.pref2.desc.map(desc => {
                  return (
                    <div className="relative z-0  px-2 w-full group">
                      <label className="font-mono uppercase font-bold  text-11  text-gray-900 dark:text-gray-300 bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                        {desc}
                      </label>
                      <input type="text" name="first_name" id="first_name" className="h-10 text-[11px]text-10   border py-55-rem border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-3/4 w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="" placeholder="" />
                    </div>
                  )
                })
              }
            </div>
            {
              eventdata?.pref1.map(items => {
                return (
                  <div>
                    <select
                      name="branch"
                      className="md:w-3/4 w-full py-4 px-1 rounded-lg gray-bg opacity-75"
                      defaultValue={"null"}
                    >
                      <option value={"null"} disabled>
                        {items.desc}
                      </option>
                      {
                        items.option.map(options=>{
                          return(
                          <option value={options}>{options}</option>
                        )})
                      }
                    </select>
                  </div>
                )
              })
            }
            <button className="bg-nav-bg text-white font-bold p-4 w-40 hover:bg-cyan-500 rounded-full hover:text-black">
                Register
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Register