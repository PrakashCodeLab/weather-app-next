"use client";

import { FormProps } from "@/types/types";
import { createContext, useContext, useState } from "react";

export const DataWeather = createContext<FormProps | string>('chennai');

import React from "react";

export function DataWeatherContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [city, setCity] = useState<string>("chennai");
  return (
    <DataWeather.Provider value={{ city, setCity }}>
      {children}
    </DataWeather.Provider>
  );
}


export function useDataWeather(){
    const context = useContext(DataWeather);
    if (!context){
        throw new Error('useDataWeather must be used within a DataWeatherContextProvider');
    }
    return context;
}