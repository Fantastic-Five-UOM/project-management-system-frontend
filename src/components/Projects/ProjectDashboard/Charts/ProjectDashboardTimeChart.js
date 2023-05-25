import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function ProjectDashboardTimeChart() {

  const [options, setOptions] = useState({
    series: [40, 30, 15, 15],
    labels: ["Apple", "Mango", "Lemon", "Banana"],
  });

  return (
    <div id="pieChart">
      <Chart
        options={options}
        series={options.series}
        type="pie"
        width="70%"
      />
    </div>
  );
}
