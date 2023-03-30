import Chart from "chart.js/auto";
import { CategoryScale, Tooltip } from "chart.js";
import { useState } from "react";
import { Data } from "../../utils/data";
import Styles from "./Wheel.module.css";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels'; 
import randomDegreeGenerator from "../../utils/randomDegree";

Chart.register([CategoryScale,ChartDataLabels,Tooltip]);



export const Wheel = () => {
  const [chartData, setChartData] = useState({
    //labels: Data.map((data) => data.year), 
    datasets: [
      {
        data: [66,66,66,66,66],
        backgroundColor: [
          "#8b35bc",
          "#b163da",
          "#8b35bc",
          "#b163da",
          "#8b35bc",
        ],
        borderColor: "black",
        borderWidth: 2,
        plugins:{ChartDataLabels},
        datalabels: {
          color: "#ffffff",
          formatter: (_, context) => context.chart.data.labels[context.dataIndex],
          font: { size: 24 },
        },
      },

    ],
    options: {
      responsive: true,
      plugins: {
        legend: {
          display:'none'
        },
        tooltip:false,
        title: {
          display: true,
          text: 'Chart.js Pie Chart'
        }
      }
    }
  })

  const [spinning, setSpinning] = useState(false)
  const [rotationval,setRotation] = useState(10);
  return (
    <>
    <div className= { spinning ?  `${Styles.container} ${Styles.spining}` : `${Styles.container}`}>
    <Pie data={
      {
        labels: [6,5,4,3,2,1], 
        datasets:[
          {
            data: [1,1,1,1,1,1],
            backgroundColor: [
              "#8b35bc",
              "#b163da",
              "#8b35bc",
              "#b163da",
              "#8b35bc",
              "#b163da",
            ],
            borderColor: "black",
            borderWidth: 2,
            plugins:{ChartDataLabels},
            datalabels: {
              color: "#ffffff",
              formatter: (_, context) => context.chart.data.labels[context.dataIndex],
              font: { size: 24 },
            },
          },
    
        ],
      }
    } 
    height={40}
    width={40}
    options = {{
      responsive: true,
      plugins: {
        legend: {
          display:false
        },
        tooltip:false,
      }
    }}/>
    </div>
    <button className={Styles.button} onClick={()=>{setSpinning(!spinning); let x = randomDegreeGenerator(6, [1,4,6]);
alert(x);
let root = document.getElementById("root");
root.style.setProperty('--rotation', `${x}deg`);  }}>click</button>
    </>
  )
}
