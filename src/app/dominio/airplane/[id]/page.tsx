"use client";

import React, { useEffect, useState } from "react";
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
    (airplane) => airplane.id.toString() === params.id
  );

  if (!airplane) {
    return <div>No se encontró el avión</div>;
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [fecha1, setFecha1] = useState("");
  const [fecha2, setFecha2] = useState("");
  const [fecha3, setFecha3] = useState("");
  const [fecha4, setFecha4] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const getFormattedDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  return (
    <div className="overflow-hidden">
      <Navbar />

      <h1 className="absolute text-6xl ml-[40%] sm:ml-0 sm:top-1/2 sm:right-1/2  sm:transform sm:translate-x-1/2 sm:-translate-y-1/2">
        {airplane.id}
      </h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Copa_Airlines_aircraft_parked_at_Tocumen_Terminal_2.jpg"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <button
        className="absolute bg-[#1b303f] top-[12em] ml-[30%] sm:ml-0 sm:top-1/2 sm:right-1/2  sm:transform sm:translate-x-1/2 sm:mt-[2em] rounded-md p-2 hover:opacity-90"
        onClick={openModal}
      >
        Add registry
      </button>
      {modalOpen && (
        <div className="modal absolute top-1/2 right-1/2 transform translate-x-1/2 bg-[#1b303f] p-6 rounded-md">
          <div className="modal-content ">
            <span className="close cursor-pointer text-xl" onClick={closeModal}>
              &times;
            </span>
            <div>
              <h1 className="text-white font-bold text-3xl">Registros</h1>
              {airplane.registries[0] ? (
                <div>
                  <p className="text-white">Fecha inicial</p>
                  <input type="date" value={fecha1} />
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
                  <input type="date" value={fecha3} />
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
                  <input type="date" value={fecha2} />
                </div>
              ) : (
                <p>No hay registros</p>
              )}
              {airplane.registries[1] && airplane.registries[1].endDate ? (
                <div>
                  <p className="text-white">Fecha final</p>
                  <input type="date" value={fecha4} />
                </div>
              ) : (
                <p>No hay registros</p>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
