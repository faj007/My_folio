import Link from "next/link"
export default function Box() {
    return (
      <div>
        <div className="relative flex z-10 mt-3 ml-3">
  <Link href="/homepage" className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
    </svg>
    précédent
  </Link>
</div>
        <div className="grid max-w-4xl lg:max-w-5xl mt-10 grid-cols-1 mx-auto text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <div className="relative">
                <div className="absolute -inset-1">
                    <div
                        className="w-full h-full rotate-180 opacity-30 blur-xl filter bg-gradient-to-r from-blue-600 via-white to-blue-600">
                    </div>
                </div>
                <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div className="p-9">
                        <h1 className="mt-2 text-2xl font-bold text-blue-600 sm:mt-10">Baccalauréat A1</h1>
                        <h6 className="text-gray-500">Collège Frelec scolaire</h6>
                        <p className="mt-4 text-base text-gray-600">2021 - 2022</p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-1">
                    <div
                        className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-blue-600 via-white to-blue-600">
                    </div>
                </div>
                <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div className="p-9">
                        <h3 className="mt-4 text-xl font-bold text-blue-600 sm:mt-10">Licence en Informatique et sciences du numérique option transformation digitale</h3>
                        <h6 className="text-gray-500">Université Virtuelle de Côte d'Ivoire</h6>
                        <p className="mt-4 text-base text-gray-600">2022 - à présent</p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-1">
                    <div
                        className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-blue-600 via-white to-blue-600">
                    </div>
                </div>
                <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div className="p-9">
                        <h3 className="mt-4 text-2xl font-bold text-blue-600 sm:mt-10">Developpement fullstack
                        </h3>
                        <h6 className="text-gray-500">We.code</h6>
                        <p className="mt-4 text-base text-gray-600">May 2025 - in progress</p>
                    </div>
                </div>
            </div>
            <div className="col-span-full flex justify-center">
              <Link rel="stylesheet" href="projet">
    <button className="relative animate-pulse mt-10 text-center text-3xl text-gray-200 px-6 py-2 justify-center rounded-md overflow-hidden group cursor-pointer">
            <span className="absolute inset-0 bg-orange-600 transform -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
            <span className="relative z-20 text-blue-600 font-['cursive'] group-hover:text-gray-800">
              
              Projets Réalisés
              
            </span>
          </button></Link>
            </div>
            
        </div>
      </div>
    
    )
}