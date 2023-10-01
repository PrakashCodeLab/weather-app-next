import TimeSec from "@/components/TimeSec";
import WeatherSec from "@/components/WeatherSec";

export default function Home() {

  return (
    <main className="w-full p-5   flex justify-around items-center  max-lg:flex-col">
       <div >
       <TimeSec  />
       </div>
      <div>
      <WeatherSec />
      </div>
     
    </main>
  );
}
