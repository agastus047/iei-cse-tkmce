import eventlist from '@/data/eventlist';
import { Flag } from '@mui/icons-material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import axios from 'axios';
import { CldUploadWidget } from 'next-cloudinary';

import { FaCheckCircle } from "react-icons/fa";
const Register = () => {
  const [ieiMember, setieimember] = useState(false);
  const [amount, setamount] = useState()
  const router = useRouter();
  const { link } = router.query;
  const [eventdata, setEventData] = useState(null);
  const [state, setState] = useState({})
  // const [flag, setFlag] = useState(0)
  const [msg, setmsg] = useState('');
  const [profiledone, setprofiledone] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  // const [teammcount,setteammcount] = useState(0);

  useEffect(() => {
    const eventdata = eventlist.find((event) => event.link === link);
    setEventData(eventdata);
    setamount(eventdata?.price.nonieiMember)
  }, [link]);

  async function sendData() {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/register", {
        ...state,
        event_link: eventdata?.link,
        amount
      });
      if (response.status === 200) {
        setmsg("successfully registered");
        setprofiledone(true);
        setTimeout(() => {
          setprofiledone(false);
          router.push("/Events");
        }, 3000);
      }
      else {
        setmsg("Couldn't register. Contact admin for assistance");
        setprofiledone(true);
        setTimeout(() => {
          setprofiledone(false);
        }, 3000);
      }
    }
    catch (error) {
      if (error.response.status === 400) {
        setmsg("email already in use");
        setprofiledone(true);
        setTimeout(() => {
          setprofiledone(false);
        }, 3000);
      }
      else {
        setmsg("Couldn't register. Contact admin for assistance");
        setprofiledone(true);
        setTimeout(() => {
          setprofiledone(false);
        }, 3000);
      }
    } finally {
      setIsLoading(false);
    }
  }

  const onsubmit = (event) => {
    event.preventDefault();
    var flag = 0;
    var ex1 = 0;
    var ex2 = 0;
    var questions = 0;
    if (eventdata?.isTeamevent) {
      var teammcount = 0;
      if (
        !state.member_0 ||
        !state.email_0 ||
        !state.phone_number_0 ||
        !state.college_0 ||
        !state.year_0 ||
        !state.branch_0 ||
        !state.batch_0
      ) {
        setmsg("Complete the personal details");
        setprofiledone(true);
        setTimeout(() => {
          setprofiledone(false);
        }, 3000);
        return;
      } else {
        flag++
      }
      for (let i = 1; i <= eventdata?.teammember - 1; i++) {
        const memberName = `member_${i}`;
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

          setmsg("Complete the personal details");
          setprofiledone(true);
          setTimeout(() => {
            setprofiledone(false);
            return;
          }, 3000);
        } else {
          teammcount++;
        }
      }

      if (teammcount === eventdata?.teammember - 1) {
        flag++
      } else {
        setmsg("Complete the personal details");
        setprofiledone(true);
        setTimeout(() => {
          setprofiledone(false);
        }, 3000);
        return
      }
      if (ieiMember) {
        if (!state.member_id) {
          setmsg("Enter the membership id");
          setprofiledone(true);
          setTimeout(() => {
            setprofiledone(false);
          }, 3000);
          return;
        } else {
          flag++
        }
      }

      if (eventdata?.isPaid && eventdata?.price.ieiMember > 0) {
        if (
          !state.upiid ||
          !state.accholdersname ||
          !state.transactionid
        ) {
          setmsg("Complete the payment field");
          setprofiledone(true);
          setTimeout(() => {
            setprofiledone(false);
          }, 3000);
          return;
        } else {
          flag++
        }
      }
      for (let i = 0; i < eventdata?.pref2.length; i++) {
        const question = `questiontype2_${i}`
        if (
          !state[question]
        ) {
          setmsg("Complete all the Questions");
          setprofiledone(true);
          setTimeout(() => {
            setprofiledone(false);
          }, 3000);
          return;
        } else {
          ex1++;
          flag++;
        }
      }
      for (let i = 0; i < eventdata?.pref1.length; i++) {
        const question = `questiontype1_${i}`
        if (
          !state[question]
        ) {
          setmsg("Complete all the Questions");
          setprofiledone(true);
          setTimeout(() => {
            setprofiledone(false);
          }, 3000);
          return;
        } else {

          ex2++;
          flag++;
        }
      }


      if (ex1 === eventdata?.pref2.length && ex2 === eventdata?.pref1.length) {
        questions = eventdata?.pref2.length + eventdata?.pref1.length
      }
      console.log(flag)
      console.log(questions + "questions")
      if (eventdata?.isPaid && amount > 0) {
        if (ieiMember) {
          if (flag === (4 + questions)) {
            sendData();
          }
        }
        else {
          if (flag === (3 + questions)) {
            sendData();
          }
        }
      } else {
        if (ieiMember) {
          if (flag === (3 + questions)) {
            sendData();
          }
        }
        else {
          if (flag === (2 + questions)) {
            sendData();
          }
        }

      }
    } else if (!eventdata?.isTeamevent) {
      if (
        !state.member_0 ||
        !state.email_0 ||
        !state.phone_number_0 ||
        !state.college_0 ||
        !state.year_0 ||
        !state.branch_0 ||
        !state.batch_0
      ) {
        setmsg("Complete the profile details ");
        setprofiledone(true);
        setTimeout(() => {
          setprofiledone(false);
        }, 3000);
        return;
      } else {
        flag++
      }

      if (ieiMember) {
        if (!state.member_id) {
          setmsg("Enter the iei membership id");
          setprofiledone(true);
          setTimeout(() => {
            setprofiledone(false);
          }, 3000);
          return;
        }
        else {
          flag++
        }
      }


      if (eventdata?.isPaid && amount > 0) {
        if (
          !state.upiid ||
          !state.accholdersname ||
          !state.transactionid
        ) {
          setmsg("Enter  the payment detail");
          setprofiledone(true);
          setTimeout(() => {
            setprofiledone(false);
          }, 3000);
          return;
        }
        else {
          flag++
        }
      }

      for (let i = 0; i < eventdata?.pref2.length; i++) {
        const question = `questiontype2_${i}`
        if (
          !state[question]
        ) {
          setmsg("Complete all the questions");
          setprofiledone(true);
          setTimeout(() => {
            setprofiledone(false);
          }, 3000);
          return;
        } else {
          ex1++;
          flag++;
        }
      }
      for (let i = 0; i < eventdata?.pref1.length; i++) {
        const question = `questiontype1_${i}`
        if (
          !state[question]
        ) {
          setmsg("Complete all the questions");
          setprofiledone(true);
          setTimeout(() => {
            setprofiledone(false);
          }, 3000);
          return;
        } else {

          ex2++;
          flag++;
        }
      }

      if (ex1 === eventdata?.pref2.length && ex2 === eventdata?.pref1.length) {
        questions = eventdata?.pref2.length + eventdata?.pref1.length
      }
      if (eventdata?.isPaid && amount > 0) {
        if (ieiMember) {
          if (flag === (3 + questions)) {
            sendData();
          }
        }
        else {
          if (flag === (2 + questions)) {
            sendData();
          }
        }
      } else {
        if (ieiMember) {
          if (flag === (2 + questions)) {
            sendData();
          }
        }
        else {
          if (flag === (1 + questions)) {
            sendData();
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
      if (eventdata?.price.ieiMember <= 0) {
        setState({
          ...state,
          upiid: null,
          accholdersname: null,
          transactionid: null,
          imageUrl: null
        });
      }
    } else {
      setieimember(false)
      setamount(eventdata?.price.nonieiMember)
      setState({
        ...state,
        member_id: null,
      })
    }
  }
  return (
    <>
      <div className='pl-2 pr-2'>
        <div className='md:flex font-Poppins w-full  gap-5 bg-white '>
          <div className='md:w-1/2 flex flex-col gap-4 p-4 md:h-screen  justify-center items-center md:min-h-screen   md:sticky  md:top-0'>
            <h1 className='md:text-4xl font-bold break-words text-2xl '>{eventdata?.name}</h1>
            <p className="font-semibold whitespace-pre-wrap">{eventdata?.discription}</p>
          </div>
          <div className="md:w-1/2 w-full p-2 ">
            <form className='flex flex-col justify-center items-center'>
              <div className='flex flex-col gap-5'>
                <div className="relative z-0  px-2 w-full group">
                  <label className="font-mono uppercase font-bold  text-11  text-black
      bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                    Full Name
                  </label>
                  <input type="text" name="member_0" id="first_name" className="h-10 text-[11px]text-10  w-full border py-55-rem border-cyan-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:focus:ring-blue-500 dark:focus:border-cyan-500"
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
                </select>
                {eventdata?.isPaid ? (
                  <div className="flex justify-center items-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value={ieiMember}
                        className="sr-only peer"
                        onChange={(e) => handlebox(e.target.checked)}
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <span className="ms-3 text-sm font-medium text-black">IEI MEMBER?</span>
                    </label>
                  </div>
                ) : null}
                {ieiMember ? <div className="relative z-0  px-2 w-full group">
                  <label className="font-mono uppercase font-bold  text-11  text-black
    bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                    IEI membership ID
                  </label>
                  <input type="text" name="member_id" id="first_name" className="h-10 text-[11px]text-10  w-full border py-55-rem border-cyan-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:focus:ring-blue-500 dark:focus:border-cyan-500"
                    required="" placeholder="" onChange={handlechange} />
                </div> : <></>}
                {eventdata?.isTeamevent ? <>{

                  Array.from({ length: eventdata?.teammember - 1 }).map((_, index) => (
                    <>
                      <div><p className='font-mono uppercase font-bold p-2'>Enter the detail of member {index + 2}</p></div>
                      <div key={index}>
                        <div className="relative z-0  px-2 w-full group">
                          <label className="font-mono uppercase font-bold  text-11  text-black bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name={`member_${index + 1}`}
                            id={`full_name_${index + 1}`}
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
                            name={`email_${index + 1}`}
                            id={`email_${index + 1}`}
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
                            name={`phone_number_${index + 1}`}
                            id={`phone_number_${index + 1}`}
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
                            name={`college_${index + 1}`}
                            id={`college_${index + 1}`}
                            className="h-10 text-[11px]text-10  w-full border py-55-rem border-cyan-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:focus:ring-blue-500 dark:focus:border-cyan-500"
                            required=""
                            placeholder=""
                            onChange={handlechange}
                          />
                        </div>
                        <div className='mt-5'>
                          <select
                            onChange={handlechange}
                            name={`year_${index + 1}`}
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
                            name={`branch_${index + 1}`}
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
                            name={`batch_${index + 1}`}
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
                    </>
                  ))
                }
                </> : <></>}

                {eventdata?.referalId ? <div className="relative z-0  px-2 w-full group">
                  <label className="font-mono uppercase font-bold  text-11  text-gray-900 dark:text-gray-300
      bg-white relative px-1 top-2  left-3 w-auto group-focus-within:text-red-600 ">
                    Referral code(IF APPLICABLE)
                  </label>
                  <input type="text" name="referal_id" id="first_name" className="h-10 text-[11px]text-10 w-full border py-55-rem border-cyan-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:focus:ring-blue-500 dark:focus:border-cyan-500"
                    required="" placeholder="" onChange={handlechange} />
                </div> : <></>}
                <div className='flex flex-col'>
                  {
                    eventdata?.pref2.map((desc, index) => {
                      return (
                        <div key={index} className="relative z-0  px-2 w-full group">
                          <label className="font-mono uppercase font-bold text-11 text-black bg-white relative px-1 top-2 left-3 w-auto group-focus-within:text-red-600">
                            {desc.question}
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
                          name={`questiontype1_${index}`}
                          className="w-full py-4 px-1 rounded-lg gray-bg opacity-75"
                          defaultValue={"null"}
                          onChange={handlechange}
                        >
                          <option value={"null"} disabled>
                            {items.desc}
                          </option>
                          {
                            items.option.map(options => {
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
                {eventdata?.isPaid && amount > 0 ?
                  <>
                    <div className="bg-cyan-500  indicator rounded-md w-full p-4 mb-4 flex flex-col items-center justify-center shadow-xl">
                      <span className="indicator-item indicator-center badge badge-info"></span>
                      <div className="bg-cyan-500 bg-opacity-50 rounded w-3/4 grid text-center justify-center font-mono pt-7 pb-7">
                        <div className="flex ">
                          <span><span className='font-bold'>Amount</span> : Rs {String(amount)}</span>
                        </div>
                        <div className="flex pt-4 ">
                          <span><span className='font-bold'>ACCOUNT NAME</span> : Bharath Vishnu</span>
                        </div>
                        <div className="flex pt-4 ">
                          <span><span className='font-bold'>UPI Id</span> : bharathvb1204@okicici</span>
                        </div>
                        <div className="flex pt-4">
                          <span><span className='font-bold'>PH.NUMBER</span> : 9947269031</span>
                        </div>
                        <div className='flex pt-4'>
                          <div>
                            <Image
                              src="/gpay.jpeg"
                              width={500}
                              height={500}
                              alt="Picture of the author"
                            />


                          </div>
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
                      <div className="acc-name grid grid-rows-2  w-3/4 pb-7">
                        <span className="pb-3 ">
                          <label>UPI ID</label>
                        </span>

                        <input
                          className="input w-full max-w-xs opacity-75 bg-white text-black rounded-lg"
                          type={"text"}
                          name="upiid"
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
                      <div className="trans-id grid grid-rows-2  w-3/4 pb-7">
                        <span className="pb-3">
                          <label>Screenshot</label>
                        </span>

                        <CldUploadWidget
                          uploadPreset="i7nid1ke"
                          onUpload={(result, widget) => {
                            setState({ ...state, imageUrl: "https://res.cloudinary.com/dafndts9z/image/upload/v1697362053/" + result.info.public_id });
                          }}
                        >
                          {({ open }) => {
                            function handleOnClick(e) {
                              e.preventDefault();
                              open();
                            }
                            return (
                              <div className='flex justify-end'>
                                {
                                  state.imageUrl ==null?<button onClick={handleOnClick} className="bg-nav-bg text-white font-bold p-4 w-40 hover:bg-cyan-500 rounded-full hover:text-black">
                                  Upload image
                                </button>:<button onClick={handleOnClick} className="bg-nav-bg  text-white font-bold p-4 w-40 hover:bg-nav-bg rounded-full hover:text-white">
                                <div className='flex justify-center items-center gap-5'> <p>Uploaded</p> <FaCheckCircle /></div>
                              </button> 
                                }
                                
                              </div>
                            );
                          }}
                        </CldUploadWidget>


                      </div>

                    </div>
                  </> : <></>}


                <div className="flex justify-end">
                  {isLoading ? <button className="bg-nav-bg text-white font-bold p-4 w-40 hover:bg-cyan-500 rounded-full hover:text-black flex justify-center items-center" >
                    <div role="status">
                      <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </button> :
                    <button className="bg-nav-bg text-white font-bold p-4 w-40 hover:bg-cyan-500 rounded-full hover:text-black" onClick={onsubmit}>
                      Register
                    </button>
                  }
                </div>

              </div>
            </form>

          </div>
          {profiledone && (
            <div className="fixed bottom-10 left-0 w-full flex justify-center">
              <div className="bg-cyan-500 text-white font-bold font-mono p-3 rounded">
                {msg}
              </div>
            </div>
          )}
        </div >
      </div >



    </>
  )
}

export default Register