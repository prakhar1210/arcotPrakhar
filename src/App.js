import { useEffect, useState } from "react";
import React from "react";
import { Grid } from "@mui/material";
import "./App.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Pie, Line } from "react-chartjs-2";

import axios from "axios";
import LineChart from "./LineChart/LineChart.jsx";
import PieChart from "./PieChart/PieChart";
import FinalBar from "./FinalCharts/FinalBar.jsx";
import FinalPie from "./FinalCharts/FinalPie.jsx";
import CategoryDistributionChart from "./BarChart/CategoryDistributionChart.jsx";

import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";

function App() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/data.json");
      setJsonData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  console.log(jsonData);

  return (
    <div className="App">
      <div className="Contacts">
        <img
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/prakhar-shrivastava-55a520274/",
              "_blank"
            )
          }
          className="Contacts_Image"
          src={linkedin}
          alt="linkedin"
        />
        <img
          onClick={() =>
            window.open("https://github.com/prakhar1210", "_blank")
          }
          className="Contacts_Image"
          src={github}
          alt="github"
        />
      </div>
      <div className="AppHeading">Arcot AI - Dashboard</div>

      <div className="chartsContainer">
        <CategoryDistributionChart
          categoryDistribution={jsonData.category_distribution}
        />
        <LineChart responseTimes={jsonData.response_times} />
      </div>

      <div className="chartsContainer">
        <PieChart userSatisfactionData={jsonData.user_satisfaction} />
        <FinalBar usageData={jsonData.usage_statistics} />
      </div>

      <div className="chartsContainer">
        <FinalPie usageData={jsonData.usage_statistics} />
      </div>

      <div className="AppFooter">Created by Prakhar Shrivastava</div>
    </div>
  );
}

export default App;
