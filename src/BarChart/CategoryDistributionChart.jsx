import React from "react";
import { Bar } from "react-chartjs-2";
import "./CategoryDistributionChart.css";

const CategoryDistributionChart = ({ categoryDistribution }) => {
  // Extracting category names and query counts
  const categories = Object.keys(categoryDistribution);
  const queryCounts = Object.values(categoryDistribution);

  // Data for the bar chart
  const data = {
    labels: categories, // Labels for X-axis
    datasets: [
      {
        label: "Number of Queries", // Label for the dataset
        data: queryCounts,  // Data points for Y-axis
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",  // Background color for bars
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          // Add more colors if needed
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",  // Border color for bars
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          // Add more colors if needed
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart (if needed)
  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="UniversalContainers">
      <h3 className="UniversalTitle">Category Distribution</h3>
      <div className="UniversalChartHolder">
        <Bar
          id="universal_Id"
          data={data}
          options={options}
          height={20}
          width={100}
        />
      </div>
    </div>
  );
};

export default CategoryDistributionChart;
