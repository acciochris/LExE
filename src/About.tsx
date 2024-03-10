import Officer from "./Officer"
import grants from './assets/about-grants.png'
import contributions from "./assets/contributions.png"

import { onMount } from 'solid-js'
import { Chart, Title, Tooltip, Legend, Colors } from 'chart.js'
import {Pie, Line, DefaultChart} from 'solid-chartjs'

onMount(() => {
  Chart.register(Title, Tooltip, Legend, Colors)
})

const lineOptions_grants = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
        display: true,
        position: "left",
        ticks: {
            // Include a dollar sign in the ticks
            callback: function(value, index, ticks) {
                return '$' + value + 'M';
            }
        }, 
        text: "Cumulative Contributions (in Millions)"
    }, 
    y1: {
      display: true, 
      position: "right", 
      grid: {
        drawOnChartArea: false
      }, 
      ticks: {
        // Include a dollar sign in the ticks
        callback: function(value, index, ticks) {
            return value + ' grants';
        }
    }, 
    }
  },
  plugins: {
    title: {
        display: true,
        text: 'Cumulative Contributions & Approved Grants', 
        font: {
          size: 20
        }, 
        
    }, 
    legend: {
      position: "bottom"
    }, 
    labels: {
      font: {
        size: 20
      }
    }
  }
}

const chartOptions_grants = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
        display: true,
        text: 'Grant Approved By Department (All Years)', 
        font: {
          size: 20
        }
    }, 
    legend: {
      position: "bottom"
    }, 
    labels: {
      font: {
        size: 20
      }
    }
  }
}

const lineDataGrants = {
  labels: [
    '2011-2012', 
    '2012-2013', 
    '2013-2014',
    '2014-2015',
    '2015-2016',
    '2016-2017',
    '2017-2018',
    '2018-2019',
    '2019-2020'
  ], 
  datasets: [{
    label: "$ Contributions (Millions)",
    data: [
      0.075,
      0.25,
      0.42, 
      0.55,
      0.75, 
      0.8, 
      1.12, 
      1.35, 
      1.5 
    ], 
    yAxisID: 'y',
  }, {
    label: "Approved Grants (Count)", 
    data: [
      12.5, 
      37.5, 
      60, 
      100, 
      125, 
      160, 
      190, 
      200, 
      222.5
    ], 
    yAxisID: 'y1'
  }]
}

const pieDataGrants = {
  labels: [
    'School',
    'Art',
    'Business', 
    'Drama', 
    'English', 
    'Mathematics/Computer Science',
    'Music', 
    'Physical Education', 
    'Science', 
    'Social Studies', 
    'World Languages',
    'Special Education', 
    'Guidance', 
    'Library'
  ],
  datasets: [{
    data: [32, 4, 1, 1, 7, 0, 10, 5, 5, 21, 3, 3, 1, 2, 5]
  }]
};

function About() {
  return <div> 

    {/** Put the code for departments front page */}
    <div class="w-full gap-4 flex flex-row sm:flex-col"> 
        <div class="flex flex-col gap-2 w-[50%] sm:w-full mt-20"> 
          <h1 class="text-6xl font-extrabold text-center"> Our Mission </h1> 
          <p class="text-2xl font-light text-center mx-20"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin enim in dapibus sollicitudin. Sed euismod semper convallis. Mauris vel laoreet tellus. </p> 
        </div> 
        {/* <img src={grants} class="mb-2 h-96 mx-20"/> */}
        <div class="mt-12 md:w-[50%] sm:flex sm:flex-shrink"> <Pie data={pieDataGrants} options={chartOptions_grants} /> </div> 
    </div> 

    <div class="w-full gap-4 flex flex-row sm:flex-col"> 
        {/* <img src={contributions} class="mb-2 h-96 mx-20"/> */}
        <div class="flex flex-col gap-2 w-[50%] sm:w-full mt-20"> 
          <h1 class="text-6xl font-extrabold text-center"> Our Mission </h1> 
          <p class="text-2xl font-light text-center mx-20"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin enim in dapibus sollicitudin. Sed euismod semper convallis. Mauris vel laoreet tellus. </p> 
        </div> 
        <div class="mt-12 md:w-[50%] sm:flex sm:flex-shrink"> <Line data={lineDataGrants} options={lineOptions_grants} /> </div> 
    </div> 

    {/** Put all the officer section here. */}

    <div class="flex flex-row w-full justify-around my-8"> 
      <div class="flex flex-col gap-4"> 
        <Officer/>
        <Officer/>
        <Officer/>
      </div> 
      <div class="flex flex-col gap-4"> 
        <Officer/>
        <Officer/>
        <Officer/>
      </div> 
    </div> 


  </div> 
}

export default About
