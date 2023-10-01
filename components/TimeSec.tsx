"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import dayImage from '../public/assets/day.gif';


const TimeSec = () => {
  

  const [currentTime , SetCurrentTime] = useState<Date | null>(null);
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const Todayday = new Date().getDay();
  const todayName = dayNames[Todayday];
  useEffect(()=>{
  
      const interval = setInterval(()=>{
       SetCurrentTime(new Date());   
      },1000);

    

      return ()=> clearInterval(interval);
  },[])


  
   
    
  return (
    <section className="bg-white  bg-opacity-50 backdrop-blur-md rounded drop-shadow-lg p-6  shadow-md   my-6 w-[300px] neumorphism-shadow">
    <div className="flex justify-center items-center">
      <Image src={dayImage} className="rounded-full w-24 h-24 object-contain" alt="Image" />
    </div>
    <div className="text-center mt-4">
      <h3 className="text-3xl font-semibold text-slate-700 uppercase pt-2">{todayName}</h3>
      {currentTime ? (
        <>
          <p className="text-xl pt-2 ">{`${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()}`}</p>
          <p className="text-lg pt-2 ">{`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`}</p>
        </>
      ) : (
        <>null</>
      )}
    </div>
  </section>

  
  
  );
}

export default TimeSec;
