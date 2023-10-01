export type WeatherDataProps = {
    name: string;
    main: {
      temp: number;
      humidity: number;
    };
    weather: {
      description: string;
    }[];
    wind: {
      speed: number;
    };
  };

  export interface FormProps {
    city: string;
    setCity: (value: string) => void;
  }