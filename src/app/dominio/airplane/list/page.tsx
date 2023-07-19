import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Airplane from "@/app/components/airplane";

export default function Airplanes() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="flex">
        <Airplane />
      </div>

      <Footer />
    </div>
  );
}
