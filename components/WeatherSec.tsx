"use client";

import { KelvintoDeg } from '@/constant/constants';
import { weatherFetchApi } from '@/lib/weatherApi';
import { WeatherDataProps } from '@/types/types';
import React, { useEffect, useState } from 'react';
import { useDataWeather } from '@/context/DataContext';
import Image from 'next/image';
import image1 from '../public/assets/temp.png';
import image2 from '../public/assets/humidity.png';
import image3 from '../public/assets/speed.png';
import image4 from '../public/assets/wind.gif';


const WeatherSec = () => {
  const {city} = useDataWeather() as { city : string}; 
    
    const [weatherData , SetweatherData] = useState<WeatherDataProps | null>(null);
  
    const [loading , SetLoading] = useState(false);

    useEffect(()=>{
        const weatherFetch =async () => {
              try {
                  const getweather = await weatherFetchApi(city)
                  SetweatherData(getweather);
                  SetLoading(true);
              } catch (error) {
                console.log(error); 
              }
        }

        weatherFetch();
        
    },[city])
    
      
  return (
    <section className='w-full h-full  '>
    
{loading ? (
  weatherData ? (
    <div className="grid grid-cols-1 gap-4  bg-white  bg-opacity-50 backdrop-blur-md rounded drop-shadow-lg p-4  shadow-md  ">
    <h1 className="text-[3.5rem] text-slate-900 max-md:text-[2rem]  font-semibold  capitalize ">Weather in {weatherData.name}</h1>
    <div className="grid grid-cols-2 gap-2 justify-center items-center ">
      <div className="bg-white  bg-opacity-70 backdrop-blur-md rounded drop-shadow-lg p-3  shadow-md   flex gap-2 flex-col justify-center items-center">
        <Image src={image1} className='w-[30px] h-[30px] object-contain rounded-full' alt="image1" />
        <p className="text-center capitalize text-base text-slate-900 max-md:text-[0.8rem]">
          Temperature: {KelvintoDeg(weatherData.main.temp)}
        </p>
      </div>
      <div className="bg-white bg-opacity-70 backdrop-blur-md rounded drop-shadow-lg p-3  shadow-md flex gap-2 flex-col justify-center items-center">
      <Image src={image2} className='w-[30px] h-[30px] object-contain rounded-full' alt="image1" />
        <p className="text-center text-base capitalize text-slate-900 max-md:text-[0.8rem]">
          Sky: {weatherData.weather[0].description}
        </p>
      </div>
      <div className="bg-white bg-opacity-70 backdrop-blur-md rounded drop-shadow-lg p-3  shadow-mdflex gap-2 flex-col justify-center items-center">
      <Image src={image3} className='w-[30px] h-[30px] object-contain rounded-full' alt="image1" />
        <p className="text-center capitalize text-base text-slate-900 max-md:text-[0.8rem]">
          Humidity: {weatherData.main.humidity}%
        </p>
      </div>
      <div className="bg-white bg-opacity-70 backdrop-blur-md rounded drop-shadow-lg p-3  shadow-md flex gap-2 flex-col justify-center items-center">
      <Image src={image4} className='w-[30px] h-[30px] object-contain rounded-full' alt="image1" />
        <p className="text-center capitalize text-base text-slate-900 max-md:text-[0.8rem]">
          Wind Speed: {weatherData.wind.speed} m/s
        </p>
      </div>
    </div>
    
  </div>
  
  ) : (
    <div>
       <p className='text-white text-xl font-semibold '>No weather data is available for {city}</p>
    </div>
   
  )
) : (
  <div>
      <p className='text-white text-xl font-semibold capitalize '>Loading...</p>
  </div>

)}

    </section>
  );
}

export default WeatherSec;
