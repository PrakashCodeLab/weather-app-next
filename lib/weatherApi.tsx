
export const weatherFetchApi = async (cityName : string) => {
  const ApiKey = process.env.NEXT_PUBLIC_NEXT_WEATHER_KEY ;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("failed Fetching weather");
    }
  
    const data = await res.json();

    return data;
     
    
  } catch (error) {
    console.log(error , 'Failed to fetch weather');
    
  }

};

