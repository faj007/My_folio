"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function FinPortfolio() {
  const text = "Merci pour votre visite !";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 80); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="end"className="w-full py-20 px-6 mt-10 flex flex-col items-center text-center dark:to-gray-900">
         <div className="relative">
      <Link
        href="/contact"
        className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-orange-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        précédent
      </Link>
       </div>
     <h2 className="text-3xl font-bold mb-4 mt-15">
        {displayedText}
        <span className="animate-pulse">|</span>
      </h2>
      <p className="max-w-2xl  text-gray-600 dark:text-gray-300 text-lg mb-8">
        Je suis ouvert à toutes collaborations, projets ou opportunités.
        N'hésitez pas à me contacter pour en discuter. Ensemble, faisons avancer vos idées !
      </p>
      <a href="/BROU INAO FRED ALAN JARDEL CV.pdf" download
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg transition-all duration-300" >
        Télécharger mon CV
        </a>
       
    </section>
  );
}
        
    