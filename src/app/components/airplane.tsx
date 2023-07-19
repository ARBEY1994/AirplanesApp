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

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "../../../material-tailwind";
import Link from "next/link";

export default function Example() {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto ">
      {airplanesData.airplanes.map((airplane: Airplane) => (
        <div className="" key={airplane.id}>
          <Card
            shadow={false}
            className="relative sm:m-6 flex hover:opacity-90  transition-opacity duration-300 grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://p4.wallpaperbetter.com/wallpaper/516/115/735/sunset-4k-8k-hd-wallpaper-preview.jpg')] bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-medium leading-[1.5]"
              >
                {airplane.name}
              </Typography>
              <Typography
                variant="h5"
                className="mb-4 text-white text-left text-xs"
              >
                Elige tu mejor viaje!
              </Typography>
              <Avatar
                size="xl"
                variant="circular"
                alt="tania andrew"
                className="border-2 border-white"
                src="https://images.ecestaticos.com/bPzT-R-PT9yWebgG9TukVPWdJbE=/0x65:1253x769/1338x752/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fc73%2Fe39%2Fb02%2Fc73e39b0213f4f4814879e0d3d12609f.jpg"
              />
            </CardBody>
          </Card>
          <Link href={`${airplane.id}`}>
            <Button className="bg-[#1b303f] sm:ml-[40%]">Editar</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
