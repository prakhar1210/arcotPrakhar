import React from "react";
import { Pie } from "react-chartjs-2";
import "./FinalPie.css";

const FinalPie = ({ usageData }) => {
  const platforms = Object.keys(usageData.by_platform);
  const usageCounts = Object.values(usageData.by_platform);

  const data = {
    labels: platforms,
    datasets: [
      {
        data: usageCounts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          // Add more colors if needed
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          // Add more colors if needed
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false, // Don't maintain aspect ratio
  };

  return (
    // <div>
    //     <h2>Usage by Platform</h2>
    //     <Pie data={data} />
    // </div>
    <div className="UniversalContainers">
      <h2 className="UniversalTitle">Usage by Platform</h2>
      <div className="UniversalChartHolder">
        <Pie id="universal_Id" data={data} options={options} />
      </div>
    </div>
  );
};

export default FinalPie;
