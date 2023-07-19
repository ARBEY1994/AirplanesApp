import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main style={{ overflow: "hidden" }}>
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
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Copa_Airlines_aircraft_parked_at_Tocumen_Terminal_2.jpg"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div className="absolute md:top-1/2 md:right-1/2 text-center md:transform md:translate-x-1/2 md:-translate-y-1/2">
          <h1
            className="text-3xl md:text-7xl font-bold text-center text-[#4a4846] dark:text-white"
            style={{ backdropFilter: "blur(8px)" }}
          >
            Bienvenido a nuestra página, agenda tu viaje ahora!
          </h1>
        </div>
      </div>
      <Footer />
    </main>
  );
}
