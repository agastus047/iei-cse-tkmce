import eventlist from '@/data/eventlist';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Register = () => {

  const [ieiMember, setieimember] = useState(false);
  const [amount, setamount] = useState()
  const router = useRouter();
  const { link } = router.query;
  const [eventdata, setEventData] = useState(null);
  const [state, setState] = useState({})
  const [flag, setFlag] = useState(0)
  const [msg, setmsg] = useState('');
  const [profiledone, setprofiledone] = useState(false)
  useEffect(() => {
    const eventdata = eventlist.find((event) => event.link === link);
    setEventData(eventdata);
    setamount(eventdata?.price.nonieiMember)
  }, [link]);
  const onsubmit = (event) => {
    event.preventDefault();
    if (eventdata?.isTeamevent) {
      for (let i = 0; i < eventdata?.teammember; i++) {
        const memberName = `member${i}`;
        const email = `email_${i}`;
        const phonenumber = `phone_number_${i}`;
        const college = `college_${i}`;
        const year = `year_${i}`
        const batch = `batch_${i}`
        const branch = `branch_${i}`
        if (
          !state[memberName] ||
          !state[email] ||
          !state[phonenumber] ||
          !state[college] ||
          !state[branch] ||
          !state[batch] ||
          !state[year]
        ) {
          setmsg("Complete the field");
          setprofiledone(true);
          setTimeout(() => {
            setprofiledone(false);
          }, 3000);
        }else{
          setFlag(flag + 1)
        }
      }
      if (ieiMember) {
        if (!state.member_id) {
          setmsg("Complete the field");
          setprofiledone(true);
          setTimeout(() => {
            setprofiledone(false);
          }, 3000);
        } else {
          setFlag(flag + 1)
        }
      }
      if (eventdata?.isPaid) {
        if (
          !state.upiid ||
          !state.accholdersname ||
          !state.transactionId
        ) {
          setmsg("Complete the field");
          setprofiledone(true);
          setTimeout(() => {
            setprofiledone(false);
          }, 3000);
        }else{
          setFlag(flag + 1)
        }
      }
      const count = 0;
      eventdata?.pref1.map((items, index) => {
        const question = `question_${count}`
        if (
          !state[question]
        ) {
          console.log("Fill all the fields to submit");
        }
      })
      const count2 = 0;
      for (const key in eventdata?.pref2.desc) {
        const question = `questiontype2_${count2}`
        if (
          !state[question]
        ) {
          console.log("Fill all the fields to submit");
        }
      }
      if (eventdata?.isPaid) {
        if (ieiMember) {
          if (flag === 3) {
            console.log("registered ")
            console.log(state)
            setmsg("registered");
            setprofiledone(true);
            setTimeout(() => {
              setprofiledone(false);
            }, 3000);
          }
        }
        else {
          if (flag === 2) {
            console.log("registered");
            console.log(state)
            setmsg("registered");
            setprofiledone(true);
            setTimeout(() => {
              setprofiledone(false);
            }, 3000);
          }
        }
      } else {
        if (ieiMember) {
          if (flag === 2) {
            console.log("registered ")
            console.log(state)
            setmsg("registered");
            setprofiledone(true);
            setTimeout(() => {
              setprofiledone(false);
            }, 3000);
          }
        }
        else {
          if (flag === 1) {
            console.log("registered");
            console.log(state)
            setmsg("registered");
            setprofiledone(true);
            setTimeout(() => {
              setprofiledone(false);
            }, 3000);
          }
        }
      }
    } else if (!eventdata?.isTeamevent) {
      if (
        !state.member ||
        !state.email_0 ||
        !state.phone_number_0 ||
        !state.college_0 ||
        !state.year_0 ||
        !state.branch_0 ||
        !state.batch_0
      ) {
        setmsg("Complete the field h");
          setprofiledone(true);
          setTimeout(() => {
            setprofiledone(false);
          }, 3000);
      }else{
        setFlag(flag+1)
      }
      if (ieiMember) {
        if (!state.member_id) {
          setmsg("Complete the field");
          setprofiledone(true);
          setTimeout(() => {
            setprofiledone(false);
          }, 3000);
        }
      } else {
        setFlag(flag+1)
      }
     
      if (eventdata?.isPaid) {
        if (
          !state.upiid ||
          !state.accholdersname ||
          !state.transactionId
        ) {
          setmsg("Complete the field");
          setprofiledone(true);
          setTimeout(() => {
            setprofiledone(false);
          }, 3000);
        }
      }else{
        setFlag(flag+1)
      }
      const count = 0;
      eventdata?.pref1.map((items, index) => {
        const question = `question_${count}`
        if (
          !state[question]
        ) {

        }
      })
      const count2 = 0;
      for (const key in eventdata?.pref2.desc) {
        const question = `questiontype2_${count2}`
        if (
          !state[question]
        ) {
        }
      }
      if (eventdata?.isPaid) {
        if (ieiMember) {
          if (flag === 3) {
            console.log("registered ")
            console.log(state)
            setmsg("registered");
            setprofiledone(true);
            setTimeout(() => {
              setprofiledone(false);
            }, 3000);
          }
        }
        else {
          if (flag === 2) {
            console.log("registered");
            console.log(state)
            setmsg("registered");
            setprofiledone(true);
            setTimeout(() => {
              setprofiledone(false);
            }, 3000);
          }
        }
      } else {
        if (ieiMember) {
          if (flag === 2) {
            console.log("registered ")
            console.log(state)
            setmsg("registered");
            setprofiledone(true);
            setTimeout(() => {
              setprofiledone(false);
            }, 3000);
          }
        }
        else {
          if (flag === 1) {
            console.log("registered");
            console.log(state)
            setmsg("registered");
            setprofiledone(true);
            setTimeout(() => {
              setprofiledone(false);
            }, 3000);
          }
        }

      }
    }
  }
  const handlechange = (evt) => {
    const value = evt.target.value;

    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const handlebox = (checked) => {
    if (checked) {
      setieimember(true)
      setamount(eventdata?.price.ieiMember)
    } else {
      setieimember(false)
      setamount(eventdata?.price.nonieiMember)
    }
  }
  return (
    <div className='pl-2 pr-2'>
      <div className='md:flex font-Poppins w-full  gap-5 bg-white '>
        <div className='md:w-1/2 flex flex-col gap-4 p-4 md:h-screen  justify-center items-center md:min-h-screen   md:sticky  md:top-0'>
          <h1 className='md:text-4xl font-bold break-words text-2xl '>{eventdata?.name}</h1>
          <p className="font-semibold whitespace-pre-wrap">{eventdata?.discription}</p>
        </div>
        <div className="md:w-1/2 w-full p-2 ">
          <form className='flex flex-col justify-center items-center'>
            <div className='flex flex-col gap-5'>
              {eventdata?.isTeamevent ? <>{
                Array.from({ length: eventdata?.teammember }).map((_, index) => (
                  <div key={index}>
                    <div className="relative z-0  px-2 w-full group">
                      <label className="font-mono uppercase font-bold  text-11  text-black bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                        Enter member {index + 1}
                      </label>
                      <input
                        type="text"
                        name={`member${index}`}
                        id={`full_name_${index}`}
                        className="h-10 text-[11px] text-10  w-full border py-55-rem border-cyan-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:focus:ring-blue-500 dark:focus:border-cyan-500"
                        required=""
                        placeholder=""
                        onChange={handlechange}
                      />
                    </div>
                    <div className="relative z-0  px-2 w-full group">
                      <label className="font-mono uppercase font-bold  text-11  text-black bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                        Email
                      </label>
                      <input
                        type="email"
                        name={`email_${index}`}
                        id={`email_${index}`}
                        className="h-10 text-[11px] text-10  w-full border py-55-rem border-cyan-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:focus:ring-blue-500 dark:focus:border-cyan-500"
                        required=""
                        placeholder=""
                        onChange={handlechange}
                      />
                    </div>
                    <div className="relative z-0  px-2 w-full group">
                      <label className="font-mono uppercase font-bold  text-11  text-black bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        name={`phone_number_${index}`}
                        id={`phone_number_${index}`}
                        className="h-10 text-[11px]text-10  w-full border py-55-rem border-cyan-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:focus:ring-blue-500 dark:focus:border-cyan-500"
                        required=""
                        placeholder=""
                        onChange={handlechange}
                      />
                    </div>
                    <div className="relative z-0  px-2 w-full group">
                      <label className="font-mono uppercase font-bold  text-11  text-black bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                        College
                      </label>
                      <input
                        type="text"
                        name={`college_${index}`}
                        id={`college_${index}`}
                        className="h-10 text-[11px]text-10  w-full border py-55-rem border-cyan-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:focus:ring-blue-500 dark:focus:border-cyan-500"
                        required=""
                        placeholder=""
                        onChange={handlechange}
                      />
                    </div>
                    <div className='mt-5'>
                      <select
                        onChange={handlechange}
                        name={`year_${index}`}
                        className=" w-full py-4 rounded-lg gray-bg opacity-75"
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
                    <div className='mt-5'>
                      <select
                        onChange={handlechange}
                        name={`branch_${index}`}
                        className=" w-full py-4  rounded-lg gray-bg opacity-75"
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
                    <div className='mt-5'>
                      <select
                        name={`batch_${index}`}
                        className=" w-full py-4 rounded-lg gray-bg opacity-75"
                        defaultValue={"null"}
                        onChange={handlechange}
                      >
                        <option value={"null"} disabled>
                          Enter the Batch
                        </option>
                        <option value={"A"}>A</option>
                        <option value={"B"}>B</option>
                        <option value={"C"}>C</option>
                      </select>
                    </div>
                  </div>
                ))
              }
              </> : <><div className="relative z-0  px-2 w-full group">
                <label className="font-mono uppercase font-bold  text-11  text-black
          bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                  Full Name
                </label>
                <input type="text" name="member" id="first_name" className="h-10 text-[11px]text-10  w-full border py-55-rem border-cyan-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:focus:ring-blue-500 dark:focus:border-cyan-500"
                  required="" placeholder="" onChange={handlechange} />
              </div>
                <div className="relative z-0  px-2 w-full group">
                  <label className="font-mono uppercase font-bold  text-11  text-black
          bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                    email
                  </label>
                  <input type="email" name="email_0" id="first_name" className="h-10 text-[11px]text-10 w-full border py-55-rem border-cyan-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:focus:ring-blue-500 dark:focus:border-cyan-500"
                    required="" placeholder="" onChange={handlechange} />
                </div>
                <div className="relative z-0  px-2 w-full group">
                  <label className="font-mono uppercase font-bold  text-11  text-black
          bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                    Phone Number
                  </label>
                  <input type="number" name="phone_number_0" id="first_name" className="h-10 text-[11px]text-10  w-full border py-55-rem border-cyan-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:focus:ring-blue-500 dark:focus:border-cyan-500"
                    required="" placeholder="" onChange={handlechange} />
                </div>
                <div className="relative z-0  px-2 w-full group">
                  <label className="font-mono uppercase font-bold  text-11  text-black
          bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                    College
                  </label>
                  <input type="text" name="college_0" id="first_name" className="h-10 text-[11px]text-10  w-full border py-55-rem border-cyan-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:focus:ring-blue-500 dark:focus:border-cyan-500"
                    required="" placeholder="" onChange={handlechange} />
                </div>
                <div className="mt-5">
                  <select
                    name="year_0"
                    className=" w-full py-4 rounded-lg gray-bg opacity-75"
                    defaultValue={"null"}
                    onChange={handlechange}
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
                <div className='mt-5'>
                  <select
                    name="branch_0"
                    className=" w-full py-4  rounded-lg gray-bg opacity-75"
                    defaultValue={"null"}
                    onChange={handlechange}
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
                </div>
                <select
                  name={`batch_0`}
                  className=" w-full py-4 rounded-lg gray-bg opacity-75 mt-5"
                  defaultValue={"null"}
                  onChange={handlechange}
                >
                  <option value={"null"} disabled>
                    Enter the Batch
                  </option>
                  <option value={"A"}>A</option>
                  <option value={"B"}>B</option>
                  <option value={"C"}>C</option>
                </select></>}
              <div className="flex justify-center items-center">
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value={ieiMember} className="sr-only peer " onChange={(e) => handlebox(e.target.checked)} />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ms-3 text-sm font-medium text-black">IEI MEMBER?</span>
                </label>
              </div>
              {ieiMember ? <div className="relative z-0  px-2 w-full group">
                <label className="font-mono uppercase font-bold  text-11  text-black
      bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                  IEI membership ID
                </label>
                <input type="text" name="member_id" id="first_name" className="h-10 text-[11px]text-10  w-full border py-55-rem border-cyan-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:focus:ring-blue-500 dark:focus:border-cyan-500"
                  required="" placeholder="" onChange={handlechange} />
              </div> : <></>}
              {eventdata?.referalId ? <div className="relative z-0  px-2 w-full group">
                <label className="font-mono uppercase font-bold  text-11  text-gray-900 dark:text-gray-300
      bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                  Referral code
                </label>
                <input type="text" name="referal_id" id="first_name" className="h-10 text-[11px]text-10 w-full border py-55-rem border-cyan-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:focus:ring-blue-500 dark:focus:border-cyan-500"
                  required="" placeholder="" onChange={handlechange} />
              </div> : <></>}
              <div className='flex flex-col'>
                {
                  eventdata?.pref2.desc.map((desc, index) => {
                    return (
                      <div key={index} className="relative z-0  px-2 w-full group">
                        <label className="font-mono uppercase font-bold text-11 text-black bg-white relative px-1 top-2 left-3 w-auto group-focus-within:text-red-600">
                          {desc}
                        </label>
                        <input
                          key={index}
                          type="text"
                          name={`questiontype2_${index}`}
                          id={`first_name_${index}`}
                          className="h-10 text-[11px] text-10 w-full border py-55-rem border-cyan-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:focus:ring-blue-500 dark:focus:border-cyan-500"
                          required=""
                          placeholder=""
                          onChange={handlechange}
                        />
                      </div>
                    );
                  })
                }
              </div>
              {
                eventdata?.pref1.map((items, index) => {

                  return (
                    <div>
                      <select
                        name={`question_${index}`}
                        className="w-full py-4 px-1 rounded-lg gray-bg opacity-75"
                        defaultValue={"null"}
                        onChange={handlechange}
                      >
                        <option value={"null"} disabled>
                          {items[index + 1].desc}
                        </option>
                        {
                          items[index + 1].option.map(options => {
                            return (
                              <option value={options}>{options}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  )
                })
              }
              <div className="bg-cyan-500  indicator rounded-md w-full p-4 mb-4 flex flex-col items-center justify-center shadow-xl">
                <span className="indicator-item indicator-center badge badge-info"></span>
                <label className="">Amount</label>
                <div className="bg-cyan-500  bg-opacity-50 rounded w-3/4 grid text-center justify-center">
                  <span className="pb-10 pt-7">
                    <span>Rs </span>
                    <span>{String(amount)}</span>
                  </span>
                  <div>
                    <img src={"gpay.jpeg"} />
                  </div>
                  <div className="acc-name  w-full p-2 flex flex-col justify-center items-center">
                    <span className="pb-1 ">
                      <label>UPI ID</label>
                    </span>

                    <input
                      className="input w-full  opacity-75 bg-white text-black rounded-lg"
                      type={"text"}
                      name="upiid"
                      onChange={handlechange}
                    ></input>
                  </div>

                </div>
              </div>
              <div className="grid place-items-center bg-cyan-500 rounded-md indicator border m-4 shadow-xl">
                <span className="indicator-item indicator-center badge badge-info"></span>
                <div className="text-xl uppercase font-bold py-8">
                  transaction details
                </div>
                <div className="acc-name grid grid-rows-2  w-3/4 pb-7">
                  <span className="pb-3">
                    <label>Account Holders Name</label>
                  </span>
                  <input
                    className="input w-full max-w-xs opacity-75 bg-white text-black rounded-lg"
                    type={"text"}
                    name="accholdersname"
                    onChange={handlechange}
                  ></input>
                </div>
                <div className="trans-id grid grid-rows-2  w-3/4 pb-7">
                  <span className="pb-3">
                    <label>Transaction ID</label>
                  </span>
                  <input
                    className="input w-full max-w-xs opacity-75 bg-white text-black rounded-lg"
                    type={"number"}
                    name="transactionid"
                    onChange={handlechange}
                  ></input>
                </div>
                <div className="ss grid grid-rows-2 w-3/4 pb-7">
                  <span className="pb-3">
                    <label>Screenshot</label>
                  </span>
                  <div className='flex justify-end'>
                    <button className="bg-nav-bg text-white font-bold p-4 w-40 hover:bg-cyan-500 rounded-full hover:text-black">
                      Upload image
                    </button>
                  </div>

                </div>
              </div>


              <div className="flex justify-end">
                <button className="bg-nav-bg text-white font-bold p-4 w-40 hover:bg-cyan-500 rounded-full hover:text-black" onClick={onsubmit}>
                  Register
                </button>
              </div>
              {profiledone && (
                <div className="fixed bottom-5 right-5 bg-cyan-500 text-white p-3 rounded">
                  {msg}
                </div>
              )}
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Register