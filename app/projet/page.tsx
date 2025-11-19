import Projet from "@/component/projet";

export default function projet(){
    return(
          <div className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory">
                 <video
                   className="fixed top-0 left-0 w-full h-full object-cover z-0 brightness-50"
                   src="/videos/projets.mp4"
                   autoPlay
                   muted
                   playsInline
                 />
                 <div className="min-h-screen snap-start flex items-center justify-center px-4">
                  <Projet/>
                 </div>
                 
               </div>
    )
}