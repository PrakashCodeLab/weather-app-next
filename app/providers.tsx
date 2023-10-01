import { DataWeatherContext } from '@/context/DataContext';
import React from 'react';

const ProvidersWeather = ({children}:{children:React.ReactNode}) => {
  return (
    <DataWeatherContext>
      {children}
    </DataWeatherContext>
  );
}

export default ProvidersWeather;
