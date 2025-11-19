import Link from "next/link";
export default function Welcome() {
    return (
        <div>
        <h1 className="xl:text-7xl text-orange-600 lg:text-6xl md:text-5xl text-4xl animate-pulse font-['cursive'] text-center">
          Bonjour, Je suis
        </h1>
        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl animate-pulse font-['cursive']">
          Inao Fred Alan Jardel BROU
        </h1>
        <p className="sm:text-4xl text-md animate-pulse font-['cursive'] text-center">
          Developpeur frontend Junior
        </p>
         <p className="sm:text-3xl text-md animate-pulse font-['cursive'] text-center">
          Bienvenue dans mon Univers !
        </p>

        <div className="flex gap-3  animate-pulse justify-center mt-6 flex-wrap">
  
        <Link rel="stylesheet" href="homepage"><button className="relative  animate-pulse text-gray-200 px-6 py-2 rounded-md overflow-hidden group cursor-pointer">
            <span className="absolute inset-0 bg-orange-600 transform -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
            <span className="relative z-10 text-xl text-white font-['cursive'] group-hover:text-gray-800">
          À propos
            </span>
          </button></Link>
        </div>
      </div>
    )
}