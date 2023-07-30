import React from "react";
import data from "@/app/api/dataAirplanes.json";

interface Registry {
  startDate: string;
  endDate: string;
  status: string;
}

interface Airplane {
  id: number;
  name: number;
  registries: Registry[];
}

interface AirplanesData {
  airplanes: Airplane[];
}

const airplanesData: AirplanesData = data;

import Link from "next/link";

export default function Example() {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto w-[90%] ">
      {airplanesData.airplanes.map((airplane: Airplane) => (
        <div className="" key={airplane.id}>
          <div className="relative sm:m-6 flex hover:opacity-90  transition-opacity duration-300 grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
            <div
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-xl rounded-b-3xl bg-[url('https://p4.wallpaperbetter.com/wallpaper/516/115/735/sunset-4k-8k-hd-wallpaper-preview.jpg')] bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </div>
            <div className="relative py-14 px-6 md:px-12">
              <div color="white" className="mb-6 font-medium leading-[1.5]">
                {airplane.name}
              </div>
              <div className="mb-4 text-white text-left text-xs">
                Elige tu mejor viaje!
              </div>
            </div>
          </div>
          <Link href={`${airplane.id}`}>
            <button className="bg-[#1b303f] sm:ml-[40%] rounded-xl p-2">
              Editar
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
