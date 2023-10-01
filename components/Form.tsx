"use client";


import { weatherFetchApi } from "@/lib/weatherApi";
import { FormProps, WeatherDataProps } from "@/types/types";
import React, { ChangeEvent, useState } from "react";



const Form = ({city ,setCity}:FormProps) => {
  
  const [weather, setWeather] = useState<WeatherDataProps | null>(null);

  const weatherData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const Datafetch = await weatherFetchApi(city);
      setWeather(Datafetch);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    
    <form className="flex  items-center space-x-2 relative " onSubmit={weatherData}>
      <input
        type="text"
        name="weather"
         value={city}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
        className="rounded-lg py-2 px-4 focus:outline-none focus:ring-2 w-full h-full focus:ring-blue-500 flex-grow bg-transparent text-white border border-solid border-white "
      />
      <button
        type="submit"
        className="rounded-md py-2 px-4 bg-yellow-500 text-black hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Fetch
      </button>
    </form>
  
  
  );
}; 

export default Form;
