"use client";

import React, { createContext, useState } from "react";
import Form from "./Form";
import { useDataWeather } from "@/context/DataContext";
import { FormProps } from "@/types/types";

const Navabr = () => {
  const { city, setCity } = useDataWeather() as FormProps;

  return (
    <nav className="w-full max-w-[1280px] m-auto h-[100px] max-md:h-auto flex items-center justify-around max-md:flex-col max-md:gap-5  p-3 bg-white   bg-opacity-20 backdrop-blur-md rounded drop-shadow-lg shadow-md ">
      <h1 className="text-slate-50 uppercase font-extrabold text-xl -tracking-tighter ">
        weatherman
      </h1>
      <>
        <Form city={city} setCity={setCity} />
      </>
    </nav>
  );
};

export default Navabr;
