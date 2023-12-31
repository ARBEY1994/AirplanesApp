"use client";

import React, { useState } from "react";
import data from "@/app/api/dataAirplanes.json";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

interface Airplane {
  id: number;
  name: number;
  registries: Registry[];
}

interface Registry {
  startDate: string;
  endDate: string;
  status: string;
}

export default function AirplaneDetails({
  params,
}: {
  params: { id: string };
}) {
  const airplane = data.airplanes.find(
    (airplane) => airplane.id.toString() === params.id,
  );
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const getFormattedDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  const registryOneStartDate =
    airplane?.registries[0]?.startDate &&
    getFormattedDate(airplane.registries[0].startDate);
  const registryOneEndDate =
    airplane?.registries[0]?.endDate &&
    getFormattedDate(airplane.registries[0].endDate);

  const [fecha1, setFecha1] = useState(registryOneStartDate || "");
  const [fecha2, setFecha2] = useState(registryOneEndDate || "");

  const registryTwoStartDate =
    airplane?.registries[1]?.startDate &&
    getFormattedDate(airplane.registries[1].startDate);
  const registryTwoEndDate =
    airplane?.registries[1]?.endDate &&
    getFormattedDate(airplane.registries[1].endDate);

  const [fecha3, setFecha3] = useState(registryTwoStartDate || "");
  const [fecha4, setFecha4] = useState(registryTwoEndDate || "");

  if (!airplane) {
    return <div>No se encontró el avión</div>;
  }

  const handleFechaChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFecha1(event.target.value);
  };

  const handleFechaChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFecha2(event.target.value);
  };
  const handleFechaChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFecha3(event.target.value);
  };
  const handleFechaChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFecha4(event.target.value);
  };

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          padding: 0,
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/f/f3/Copa_Airlines_aircraft_parked_at_Tocumen_Terminal_2.jpg)",
          backgroundSize: "cover",
        }}
      >
        <h1 className="absolute text-6xl ml-[40%] sm:ml-0 sm:top-1/2 sm:right-1/2  sm:transform sm:translate-x-1/2 sm:-translate-y-1/2">
          {airplane.id}
        </h1>

        <button
          className="absolute bg-[#1b303f] top-[12em] ml-[30%] sm:ml-0 sm:top-1/2 sm:right-1/2  sm:transform sm:translate-x-1/2 sm:mt-[2em] rounded-md p-2 hover:opacity-90"
          onClick={openModal}
        >
          Add registry
        </button>
        {modalOpen && (
          <div className="modal absolute top-1/2 right-1/2 transform translate-x-1/2 bg-[#1b303f] p-6 rounded-md">
            <div className="modal-content ">
              <span
                className="close cursor-pointer text-xl"
                onClick={closeModal}
              >
                &times;
              </span>
              <div>
                <h1 className="text-white font-bold text-3xl">Registros</h1>
                {airplane.registries[0] ? (
                  <div>
                    <p className="text-white">Fecha inicial</p>
                    <input
                      type="date"
                      value={fecha1}
                      onChange={handleFechaChange1}
                    />
                    <select name="" id="" className="mx-2">
                      <option value="">{airplane.registries[0].status}</option>
                    </select>
                  </div>
                ) : (
                  <p>No hay registros</p>
                )}
                {airplane.registries[1] ? (
                  <div>
                    <p className="text-white">Fecha inicial</p>
                    <input
                      type="date"
                      value={fecha3}
                      onChange={handleFechaChange3}
                    />
                    <select name="" id="" className="mx-2">
                      <option value="">{airplane.registries[1].status}</option>
                    </select>
                  </div>
                ) : (
                  <p>No hay registros</p>
                )}
                {airplane.registries[0] && airplane.registries[0].endDate ? (
                  <div>
                    <p className="text-white">Fecha final</p>
                    <input
                      type="date"
                      value={fecha2}
                      onChange={handleFechaChange2}
                    />
                  </div>
                ) : (
                  <p>No hay registros</p>
                )}
                {airplane.registries[1] && airplane.registries[1].endDate ? (
                  <div>
                    <p className="text-white">Fecha final</p>
                    <input
                      type="date"
                      value={fecha4}
                      onChange={handleFechaChange4}
                    />
                  </div>
                ) : (
                  <p>No hay registros</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
