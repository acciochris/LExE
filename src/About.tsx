import Officer from "./Officer"
import grants from './assets/about-grants.png'
import contributions from "./assets/contributions.png"

function About() {
  return <div> 

    {/** Put the code for departments front page */}
    <div class="w-full gap-4 flex flex-row sm:flex-col"> 
        <div class="flex flex-col gap-2 w-[50%] sm:w-full"> 
          <h1 class="text-6xl font-extrabold text-center"> Our Mission </h1> 
          <p class="text-2xl font-light text-center mx-20"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin enim in dapibus sollicitudin. Sed euismod semper convallis. Mauris vel laoreet tellus. </p> 
        </div> 
        <img src={grants} class="mb-2 h-96 mx-20"/>
    </div> 

    <div class="w-full gap-4 flex flex-row sm:flex-col"> 
        <div class="flex flex-col gap-2 w-[50%] sm:w-full"> 
          <h1 class="text-6xl font-extrabold text-center"> Our Mission </h1> 
          <p class="text-2xl font-light text-center mx-20"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin enim in dapibus sollicitudin. Sed euismod semper convallis. Mauris vel laoreet tellus. </p> 
        </div> 
        <img src={contributions} class="mb-2 sm:h-96 mx-20"/>
    </div> 

    {/** Put all the officer section here. */}

    <div class="flex flex-row w-full justify-around my-4"> 
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
