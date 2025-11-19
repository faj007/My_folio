import Link from "next/link"

export default function Projet() {
  return (
    <div className="relative flex z-10 mt-3 ml-3">
      <Link
        href="/education"
        className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        précédent
      </Link>

      <div className="w-full h-full flex flex-col items-center md:py-4 py-10">
        <h3 className="text-xl reveal animate-fade">Les projets seront bientôt en ligne. Merci pour votre compréhension.</h3>

        <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-6 gap-4 justify-center items-center mt-8 reveal animate-fade">

          <img className="md:w-[50%] w-full rounded-lg object-cover" src="" alt=""/>
            
          <div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 p-4 rounded-md">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Post-it</h2>
            <h3>Vue Js + API</h3>
            <p className="text-md mt-4">Création d’une plateforme de gestion des tâches.</p>
            
            <a href=""><button className="relative animate-pulse mt-8 text-xl text-gray-200 px-6 py-2 rounded-md overflow-hidden group cursor-pointer">
              <span className="absolute inset-0 bg-gray-100 transform -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
              <span className="relative z-20 text-white group-hover:text-gray-800">Voir Projet</span>
            </button></a>
          </div>
        </div>

        <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col-reverse lg:gap-6 gap-4 justify-center items-center mt-8 reveal animate-fade">


          <div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 p-4 rounded-md">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Rotten Tomatoes</h2>
            <h3>Next Js, Mongo DB + API</h3>
            <p className="text-md mt-4">Création d'une plateforme de visionnage de films & séries.</p>
            
            <a href=""><button className="relative animate-pulse mt-8 text-xl text-gray-200 px-6 py-2 rounded-md overflow-hidden group cursor-pointer">
              <span className="absolute inset-0 bg-gray-100 transform -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
              <span className="relative z-20 text-white group-hover:text-gray-800">Voir Projet</span>
            </button></a>
          </div>

  
          <img className="md:w-[50%] w-full rounded-lg object-cover"
            src=""
            alt=""
          />
           
        </div>

        
        <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-6 gap-4 justify-center items-center mt-8 reveal animate-fade">
    
          <img className="md:w-[50%] w-full rounded-lg object-cover" src="" alt=""/>
  
          <div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 p-4 rounded-md">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Projet YOWL</h2>
            <h3>Laravel , Vue Js, Mongo DB + API</h3>
            <p className="text-md mt-4">
              Création d'une plateforme de récupération de posts sur internet pour les commenter librement.
            </p>

            <a href=""><button className="relative animate-pulse mt-8 text-xl text-gray-200 px-6 py-2 rounded-md overflow-hidden group cursor-pointer">
              <span className="absolute inset-0 bg-gray-100 transform -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
              <span className="relative z-20 text-white group-hover:text-gray-800">Voir Projet</span>
            </button></a>
          </div>
        </div>

          <div className="col-span-full flex justify-center">
              <Link rel="stylesheet" href="/contact">
    <button className="relative animate-pulse mt-10 text-center text-3xl text-gray-200 px-6 py-2 justify-center rounded-md overflow-hidden group cursor-pointer">
            <span className="absolute inset-0 bg-gray-100 transform -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
            <span className="relative z-20 text-White font-['cursive'] group-hover:text-gray-800">
              
              Me joindre
              
            </span>
          </button></Link>
            </div>
   

      </div>
    </div>
  );
}