import { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(...registerables);

export default function InstructorChart({ courses }) {
  // State to keep track of the currently selected chart
  const [currChart, setCurrChart] = useState("students");

  // Function to generate random colors for the chart
  const generateRandomColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      colors.push(color);
    }
    return colors;
  };

  useEffect(() => {
    console.log("Suno -> ", courses[0].totalAmountGenerated);
  }, []);

  // Data for the chart displaying student information
  const chartDataStudents = {
    labels: courses.map((course) => course?.courseName),
    datasets: [
      {
        data: courses.map((course) => course?.totalStudentsEnrolled),
        backgroundColor: generateRandomColors(courses.length),
        borderColor: "black",
        borderWidth: 1,
        hoverOffset: 30,
      },
    ],
  };

  // Data for the chart displaying income information
  const chartIncomeData = {
    labels: courses.map((course) => course?.courseName),
    datasets: [
      {
        data: courses.map((course) => course?.totalAmountGenerated),
        backgroundColor: generateRandomColors(courses.length),
        borderColor: "black",
        borderWidth: 1,
        hoverOffset: 30,
      },
    ],
  };

  // Options for the chart
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        position: "right",
        align: "start",
        labels: {
          font: {
            size: 14,
            weight: "600",
            family: "Inter, sans-serif",
          },
          color: "#E0E0E0",
          padding: 15,
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 12,
        },
      },
      tooltip: {
        backgroundColor: "#111827",
        titleColor: "#F9FAFB",
        bodyColor: "#E5E7EB",
        borderColor: "#374151",
        borderWidth: 1,
        cornerRadius: 6,
        padding: 12,
        bodyFont: {
          family: "Inter, sans-serif",
          size: 14,
          weight: "500",
        },
        titleFont: {
          family: "Inter, sans-serif",
          size: 15,
          weight: "700",
        },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1200,
      easing: "easeOutQuart",
    },
  };

  return (
    <div className="flex flex-1 flex-col gap-y-4 rounded-md bg-richblack-800 p-6 ">
      <p className="text-lg font-bold text-richblack-5">Visualize</p>
      <div className="space-x-4 font-semibold">
        {/* Button to switch to the "students" chart */}
        <button
          onClick={() => setCurrChart("students")}
          className={`rounded-sm p-1 px-3 transition-all duration-200 hover:scale-95 ${
            currChart === "students"
              ? "bg-richblack-700 text-yellow-50 shadow-sm shadow-white"
              : "text-yellow-400 hover:shadow-sm hover:shadow-white"
          }`}
        >
          Students
        </button>
        {/* Button to switch to the "income" chart */}
        <button
          onClick={() => setCurrChart("income")}
          className={`rounded-sm p-1 px-3 transition-all duration-200 hover:scale-95  ${
            currChart === "income"
              ? "bg-richblack-700 text-yellow-50 shadow-sm shadow-white"
              : "text-yellow-400 hover:shadow-sm hover:shadow-white"
          }`}
        >
          Income
        </button>
      </div>
      {/* Render the Pie chart based on the selected chart */}
      <div className="relative min-h-[250px]">
        <Pie
          data={currChart === "students" ? chartDataStudents : chartIncomeData}
          options={options}
        />
      </div>
    </div>
  );
}
