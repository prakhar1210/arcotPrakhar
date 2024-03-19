import React from "react";
import { Line } from "react-chartjs-2";
import "./LineChart.css";

const LineChart = ({ responseTimes }) => {
  // Extracting the dates and average times from the day_wise array
  const dayWiseData = responseTimes?.day_wise || [];
  const weekWiseData = responseTimes?.week_wise || [];

  // Mapping day-wise data to extract dates and average times
  const dayWiseDates = dayWiseData.map((entry) => entry.date);
  const dayWiseAverageTimes = dayWiseData.map((entry) => entry.average_time);

  // Mapping week-wise data to extract weeks and average times
  const weekWiseDates = weekWiseData.map((entry) => `Week ${entry.week}`);
  const weekWiseAverageTimes = weekWiseData.map((entry) => entry.average_time);

  const dayWiseChartData = {
    labels: dayWiseDates,
    datasets: [
      {
        label: "Average Response Time (Day Wise)",
        data: dayWiseAverageTimes,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const weekWiseChartData = {
    labels: weekWiseDates,
    datasets: [
      {
        label: "Average Response Time (Week Wise)",
        data: weekWiseAverageTimes,
        fill: false,
        borderColor: "rgb(192, 75, 192)",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false, // Allow the chart to not maintain aspect ratio
    responsive: true, // Make the chart responsive
  };

  return (
    <div className="UniversalContainer LineChartContainer">
      <div className="chart">
        <h2 className="UniversalTitle">Response Times (Day Wise)</h2>
        <div className="Universal_LineChartHalf">
          <Line
            id="universal_Id"
            data={dayWiseChartData}
            width={500}
            height={120}
          />
        </div>
      </div>
      <div className="chart">
        <h2 className="UniversalTitle">Response Times (Week Wise)</h2>
        <div className="Universal_LineChartHalf">
          <Line
            id="universal_Id"
            data={weekWiseChartData}
            width={500}
            height={120}
          />
        </div>
      </div>
    </div>
  );
};

export default LineChart;

// options={chartOptions}
