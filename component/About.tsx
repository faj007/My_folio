import Link from "next/link"
export default function About () {
    return (
       <div className="px-4 py-16 ">
        <div className="relative flex z-10">
  <Link href="/" className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
    </svg>
    précédent
  </Link>
</div>
  <div className="max-w-7xl mx-auto relative z-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <h2 className="text-3xl md:text-4xl font-['cursive'] text-white mb-4 text-center ">
        About Me
      </h2>
  
    <div className="p-8 bg-transparent bg-opacity-90 rounded-xl shadow-lg backdrop-blur-lg hover:scale-105 transform transition duration-300 ease-in-out">
      <p className="text-white mb-6 text-base md:text-lg font-extrabold">
        Développeur web junior créatif, passionné par la tech, le design,
        l'infographie et la photographie. Je combine compétences
        techniques et esthétiques pour créer des sites web modernes et
        percutants pour une belle expérience utilisateur.
       </p>

      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-['cursive'] text-white mb-4 text-center ">
        Compétences Humaines
      </h2>

        <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white via-orange-400  to-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-pulse">
          <div className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300">
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Créatif</h3>
          </div>
        </div> 

        <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white via-orange-400  to-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-pulse">
          <div className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300">
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Attentif</h3>
          </div>
        </div> 

        <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white via-orange-400  to-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-pulse">
          <div className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300">
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">travail d'équipe</h3>
          </div>
        </div> 

        <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white via-orange-400  to-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-pulse">
          <div className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300">
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Esprit critique</h3>
          </div>
        </div> 

        <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white via-orange-400  to-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-pulse">
          <div className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300">
          </div>
        </div> 


        <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white via-orange-400  to-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-pulse">
          <div className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300">
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Resilience</h3>
          </div>
        </div> 

      </div>
    </div>
    

   <div className="relative p-4 flex justify-center">
  <div className="
      absolute inset-0 
      bg-gradient-to-br from-orange-600 via-white to-orange-600 
      rounded-xl 
      w-[90%] sm:w-[85%] md:w-[75%] 
      mx-auto 
      shadow-lg 
      transform hover:scale-105 transition-transform duration-300
    ">
  </div>

  <img
    src="/image/me.jpeg"
    alt="About Us"
    className="
      relative 
      rounded-xl shadow-xl object-cover 
      w-[90%] sm:w-[85%] md:w-[75%] 
      h-56 sm:h-72 md:h-[420px] lg:h-[500px] 
      max-h-[500px] 
      hover:opacity-90 transition-opacity duration-300
    "
  />
</div>
      <div className="w-full flex rounded-xl flex-col gap-2 bg-gray-200 text-orange-600">
        <div className="flex flex-col gap-2">
           <h2 className="text-3xl md:text-4xl font-['cursive'] text-black mb-4 text-center ">
        Skills
      </h2>
          <div className="w-full font-semibold text-center">
            <ul>
            <li>UI/UX Design</li>
            <li>Image retouching</li> 
            <li>Front-end coding</li>
            <li>Back-end coding</li>
            </ul>
            
          </div>        
        </div>
        <div className="flex flex-col gap-2">
           <h2 className="text-3xl md:text-4xl font-['cursive'] text-black mb-4 text-center ">
        Langages
      </h2>
          <div className=" w-full text-center font-semibold ">
            <p>English</p>
            <p>French</p>
          </div>
          
        </div>
        <div className="w-full flex justify-between font-semibold">
            
            
          </div>
          <div className="w-full flex justify-between font-semibold">
            
           
          </div>
         
      </div>

      <section className="relative w-full overflow-hidden py-20">
  <h2 className="text-3xl md:text-4xl font-['cursive'] text-white mb-4 text-center">
    Hobbies
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-4">
    <div className="relative w-full h-64 sm:h-72 border border-orange-400 overflow-hidden rounded-xl hover:rotate-0 hover:scale-110 duration-500">
      <img
        src="/image/hobbie/basket.jpeg"
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
        alt=""
      />
    </div>

    <div className="relative w-full h-64 sm:h-72 border border-orange-400 overflow-hidden rounded-xl hover:rotate-0 hover:scale-110 duration-500">
      <img
        src="/image/hobbie/music.jpeg"
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
        alt=""
      />
    </div>

    <div className="relative w-full h-64 sm:h-72 border border-orange-400 overflow-hidden rounded-xl hover:rotate-0 hover:scale-110 duration-500">
      <img
        src="/image/hobbie/gaming.jpeg"
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
        alt=""
      />
    </div>

    <div className="col-span-full flex justify-center">
      <Link rel="stylesheet" href="education">
        <button className="relative animate-pulse mt-10 text-center text-3xl text-gray-200 px-6 py-2 justify-center rounded-md overflow-hidden group cursor-pointer">
          <span className="absolute inset-0 bg-orange-600 transform -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
          <span className="relative z-20 text-white font-['cursive'] group-hover:text-gray-800">
            Education
          </span>
        </button>
      </Link>
    </div>
  </div>
</section>


    </div>
  </div>


      
    )
}