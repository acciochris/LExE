import Officer from "./Officer"
import grants from './assets/about-grants.png'
import contributions from "./assets/contributions.png"

import { onMount } from 'solid-js'
import { Chart, Title, Tooltip, Legend, Colors } from 'chart.js'
import { Pie } from 'solid-chartjs'

onMount(() => {
  Chart.register(Title, Tooltip, Legend, Colors)
})

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
      {
          label: 'Sales',
          data: [50, 60, 70, 80, 90],
      },
  ],
}
const chartOptions = {
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
        <div class="mt-12 md:w-[50%] sm:flex sm:flex-shrink"> <Pie data={pieDataGrants} options={chartOptions} /> </div> 
    </div> 

    <div class="w-full gap-4 flex flex-row sm:flex-col"> 
        <img src={contributions} class="mb-2 h-96 mx-20"/>
        <div class="flex flex-col gap-2 w-[50%] sm:w-full mt-20"> 
          <h1 class="text-6xl font-extrabold text-center"> Our Mission </h1> 
          <p class="text-2xl font-light text-center mx-20"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin enim in dapibus sollicitudin. Sed euismod semper convallis. Mauris vel laoreet tellus. </p> 
        </div> 
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
