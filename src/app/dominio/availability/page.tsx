import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import AirplaneTable from "@/app/components/airplaneTable";
import data from "@/app/api/dataAirplanes.json";
import Status from "@/app/components/airplaneStatus";

const App = () => {
  const { airplanes } = data;

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Airplanes</h1>
        <Status />
        <AirplaneTable airplanes={airplanes} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
