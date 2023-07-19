import React from "react";

interface Item {
  id: number;
  status: string;
}

interface TableProps {
  items: Item[];
}

const Table: React.FC<TableProps> = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.status}</td>
            <td style={{ backgroundColor: getColorByStatus(item.status) }} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const getColorByStatus = (status: string): string => {
  switch (status) {
    case "Availability":
      return "green";
    case "Scheduled":
      return "red";
    case "In Maintenance":
      return "yellow";
    default:
      return "";
  }
};

const App: React.FC = () => {
  const items: Item[] = [
    { id: 1, status: "In Maintenance" },
    { id: 2, status: "Scheduled" },
    { id: 3, status: "Availability" },
  ];

  return (
    <div>
      <h3>Table Status</h3>
      <div className="ml-2">
        <Table items={items} />
      </div>
    </div>
  );
};

export default App;
