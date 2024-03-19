import React from "react";
import { Pie } from "react-chartjs-2";
import "../PieChart/PieChart.css";

const PieChart = ({ userSatisfactionData }) => {
  const labels = userSatisfactionData.ratings.map((rating) => rating.rating);
  const counts = userSatisfactionData.ratings.map((rating) => rating.count);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "User Satisfaction",
        data: counts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="UniversalContainers">
      <h2 className="UniversalTitle">User Satisfaction Pie Chart</h2>
      <div className="UniversalChartHolder">
        <Pie data={data} id="universal_Id" />
      </div>
    </div>
  );
};

export default PieChart;
// userSatisfactionData={userSatisfactionData}
