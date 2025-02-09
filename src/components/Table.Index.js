"use client"
import React, { useState, useEffect } from 'react'
import TableBody from './TableBody'
import dataArr from '../../public/data.json'
// import Speedometer from './Speedometer';

function TableIndex() {
  // JSON file gone print here 
  const imported_data = JSON.stringify(dataArr);
  const data = JSON.parse(imported_data);
  const [Participationdata, setParticipationdata] = useState([...data]);
  const [EligibleforSwags, setEligibleforSwags] = useState(0);
  const [EligibleforCertificates, setEligibleforCertificates] = useState(0);



  const calculateTotalEligibility = () => {
    let total = 0;
    // Set a limit of 80 participants for swags
    for (let i = 0; i < data.length; i++) {
      if (data[i]["All Skill Badges & Games Completed"] === "Yes") {
        total++;
        if (total === 80) break; // Stop counting once total reaches 80
      }
    }
    setEligibleforSwags(total);
  }

  const calculateTotalEligibilityforCertificates = () => {
    let total = 0;
    data.forEach((ele) => {
      ele["All Skill Badges & Games Completed"] == "Yes" && total++;
    })
    setEligibleforCertificates(total)
  }


  const searchname = (name) => {
    const newArr = [];
    for (let i = 0; i < data.length; i++) {
      let participant = data[i]["User Name"].toLowerCase();
      let match = participant.includes(name.toLowerCase());
      if (match) newArr.push(data[i]);

    }
    // console.log(newArr);
    setParticipationdata(newArr);
  }


  useEffect(() => {
    calculateTotalEligibility();
    calculateTotalEligibilityforCertificates();
  }, [])


  return (
    <div className='w-full relative px-3'>

      <div className="sec m-auto my-10 space-y-8 w-1/2 mob:w-full flex flex-col">

        {/* 
        <div className="message bg-yellow-100 text-yellow-700 p-5 rounded-lg shadow-lg shadow-yellow-300/30 text-center border border-yellow-300/30"><p className="text-center">-: Todays News :-</p>
          <p>Engineers Day is celebrated in India on 15th September  in memory of Sir M. Visvesvaraya, a renowned Indian engineer and statesman. This day acknowledges the significant impact engineers have on innovation, technology, and the advancement of infrastructure.</p>
        </div> */}

        {/* <Speedometer
          completion={EligibleforSwags}
        /> */}
        <h1 className="text-center"><b style={{color:'#3b82f6'}}>GDSC PPSU Team to <u>{EligibleforSwags} Participants</u>,</b></h1>
        <img width="40%" className="m-auto" src="https://www.system-concepts.com/wp-content/uploads/2020/02/excited-minions-gif.gif" alt="level" />
        
        <div className="info flex mob:flex-col mob:justify-center mob:items-center mob:space-y-10 mob:p-5 justify-evenly space-x-3 mob:space-x-0">
          <div className="eligibleforswag w-fit mob:w-full h-20 p-5 space-x-5 rounded-lg flex flex-row justify-evenly mob:justify-between items-center bg-blue-50 shadow-lg shadow-blue-300/30 border border-blue-200">
            <p className="text-center mob:text-start text-sm text-blue-400">No of Eligible <br /> Participants for swags and certificates</p>
            <p className="no text-2xl border-l-2 border-l-blue-700 pl-3 text-blue-800">{EligibleforSwags}</p>
          </div>
          <div className="eligibleforswag w-fit mob:w-full h-20 p-5 space-x-5 rounded-lg flex flex-row justify-evenly mob:justify-between items-center bg-blue-50 shadow-lg shadow-blue-300/30 border border-blue-200">
            <p className="text-center mob:text-start text-sm text-blue-400">No of Eligible <br /> Participants for Certificates</p>
            <p className="no text-2xl border-l-2 border-l-blue-700 pl-3 text-blue-800">{EligibleforCertificates}</p>
          </div>
          <div className="eligibleforswag w-fit mob:w-full h-20 p-5 space-x-5 rounded-lg flex flex-row justify-evenly mob:justify-between items-center bg-blue-50 shadow-lg shadow-blue-300/30 border border-blue-200">
            <p className="text-center mob:text-start text-sm text-blue-400">Total No of <br />Participants</p>
            <p className="no text-2xl border-l-2 border-l-blue-700 pl-3 text-blue-800">{data.length}</p>
          </div>
        </div>


        <div className="search m-auto mt-3 mob:py-3 py-2  space-x-5  flex justify-start items-center shadow-lg shadow-blue-400/30 bg-blue-50 w-full rounded-full">
          <div className="icon px-3 "><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#3b82f6" /></svg></div>
          <div className="input w-full">
            <input
              onChange={(e) => {
                searchname(e.target.value)
              }}
              className='bg-transparent mob:text-lg text-base outline-none w-full' type="text" name="searchbar" id="searchbar" placeholder='Search Your Name Here' />
          </div>
        </div>
      </div>

      <table className='mx-auto table-fixed m-5 '>
        <thead className='shadow-md text-sm bg-blue-500 text-gray-200 sticky top-2 z-0'>
          <tr className='text-center'>
            <td className="rounded-ss-lg w-80 p-2 border-r-2 border-r-gray-300">Name</td>
            <td className="p-2 border-r-2 border-r-gray-300">Redemption Status</td>
            <td className="mob:hidden p-2 px-10 border-r-2 border-r-gray-300">Cloud Skill Boost Profile</td>
            <td className="mob:rounded-se-lg p-2 border-r-2 border-r-gray-300 max-w-[150px]">Completions of Chapter and Arcade</td>
            <td className="mob:hidden p-2 border-r-2 border-r-gray-300 max-w-[150px]">No of Chapter Completed</td>
            <td className="mob:hidden p-2 border-r-2 border-r-gray-300 max-w-[150px]">No of Arcade Completed</td>
            <td className="mob:hidden rounded-se-lg p-2 max-w-[150px]">Arcade Game Completion</td>
          </tr>
        </thead>
        <TableBody
          Participationdata={Participationdata}
          setParticipationdata={setParticipationdata}
        />
      </table>

    </div>
  )
}

export default TableIndex