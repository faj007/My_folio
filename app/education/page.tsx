import Box from "@/component/Box";

export default function education(){
    return(
         <div className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory">
             <video
             className="fixed top-0 left-0 w-full h-full object-cover z-0 brightness-80"
             src="/videos/education.mp4"
             autoPlay
             loop
             muted
             playsInline/>
             <div>
                <Box/>
             </div>
            </div>
    )
}