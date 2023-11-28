export interface City {
  latitude: number;
  longitude: number;
}

export interface ICurrentWeatherData {
  weather: {
    id: number;
    icon: string;
    description: string;
  };
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  country: string;
  city: string;
  datetime: any;
}

export interface IForecastWeatherData {
  index: number;
  id: number;
  condition: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  wind_deg: number;
  icon: string;
  date: number;
  day: string;
  month: string;
  year: number;
  time: string;
}
