import Officer from "./Officer"
function About() {
  return <div> 
    <h1 class="text-7xl text-center w-full">About</h1>

    {/** Put all the officer section here. */}

    <div class="flex flex-row justify-between gap-8 w-full"> 
      <div class="flex flex-col gap-4"> 
        <Officer/>
      </div> 
      <div class="flex flex-col gap-4"> 
        <Officer/>
      </div> 
    </div> 


  </div> 
}

export default About
