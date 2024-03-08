import banner from './assets/home-banner.jpeg'

function Home() {
  return (
    <div class="px-4 md:px-12 xl:px-48 md:py-12 flex flex-col items-center">
      <div class="w-full grid sm:grid-cols-1 grid-cols-2 gap-12"> 
        <h1 class="text-6xl w-full font-extrabold sm:mx-12 sm:ml-0 ml-12 mt-12"> LEXE Foundation. </h1> 
        <div class="w-full flex flex-row"> 
        <img src={banner} class="mb-2 mx-6 sm:mx-0 h-60"/>
        </div> 
      </div> 

      {/* <div class="w-full gap-4 flex flex-row items-center"> 
        <h1 class="text-6xl w-full font-extrabold"> Lorem ipsum dolor sit amet, consecteur adipiscing elit. </h1> 
        <img src={banner} class="mb-2 mx-6 h-60"/>
      </div>  */}

      <div class="stats stats-vertical md:stats-horizontal md:my-12 my-4 w-full">
        <div class="stat place-items-center">
          <div class="stat-value xl:text-7xl">210</div>
          <div class="stat-title xl:text-2xl">Projects Funded</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-value xl:text-7xl">$1.5M</div>
          <div class="stat-title xl:text-2xl">Grants Awarded</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-value xl:text-7xl">14</div>
          <div class="stat-title xl:text-2xl">Departments Supported</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-value xl:text-7xl">4,100</div>
          <div class="stat-title xl:text-2xl">Students Helped</div>
        </div>
      </div>

      <div class="my-8">
        
        <div class="w-full flex flex-row gap-16">
        <div class="flex flex-col gap-1 w-full items-center">
            <progress class="progress progress-primary w-full" value="25" max="100"></progress>
            <p class="text-xl tracking-wider">25% parents have contributed</p>
            <progress class="progress progress-secondary w-full" value="55" max="100"></progress>
            <p class="text-xl tracking-wider">55% fundraising goal achieved</p>
        </div>
        
        <div class="flex flex-col gap-4 w-full"> 
          <h1 class="text-4xl font-extrabold text-center -mt-8 drop-shadow-2xl">Fundraising Goals</h1>
          <p class="text-lg text-left">
            Our fundraising goal for this year is $300,000. So far, we are at 55% of our fundraising
            goal with contributions from 25.4% of parents. Imagine what we can do for Lynbrook with
            100% parent participation!
          </p>
        </div> 
        
        </div>
      </div>

      <iframe
        src="https://www.youtube-nocookie.com/embed/-3a7U0o84ZQ?si=yOiKCg8Ij4C3OW1C" title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        class="w-full max-w-xl h-72 sm:h-96 mt-2"
        loading="lazy"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default Home
