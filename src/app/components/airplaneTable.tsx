import React from "react";

interface Registry {
  startDate: string;
  endDate: string;
  status: string;
}

interface Airplane {
  id: number;
  registries: Registry[];
}

interface AirplaneTableProps {
  airplanes: Airplane[];
}

const AirplaneTable: React.FC<AirplaneTableProps> = ({ airplanes }) => {
  return (
    <div className="overflow-x-auto">
      {airplanes.map((airplane) => (
        <div key={airplane.id}>
          <h3>Airplane ID: {airplane.id}</h3>

          <table className="table-auto border border-[#1b303f]">
            <thead>
              <tr>
                <th className="px-4 py-2">Dia</th>
                {[...Array(30)].map((_, index) => (
                  <th key={index + 1} className="px-4 py-2">
                    {index + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#1b303f] px-4 py-2">Status</td>
                {[...Array(30)].map((_, index) => {
                  const currentDay = index + 1;

                  const matchingRegistry = airplane.registries.find(
                    (registry) => {
                      const startDate = new Date(registry.startDate);
                      const endDate = new Date(registry.endDate);
                      const startDay = startDate.getDate();
                      const endDay = endDate.getDate();

                      const isWithinRange =
                        currentDay >= startDay && currentDay <= endDay;

                      return isWithinRange;
                    },
                  );

                  let cellColor = "";
                  if (matchingRegistry) {
                    const status = matchingRegistry.status;
                    cellColor =
                      status === "In Maintenance"
                        ? "bg-yellow-200"
                        : status === "Scheduled"
                        ? "bg-red-200"
                        : "";
                  } else {
                    cellColor = "bg-green-200";
                  }

                  return (
                    <td
                      key={index + 1}
                      className={`border border-[#1b303f] px-4 py-2 ${cellColor}`}
                    ></td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default AirplaneTable;
