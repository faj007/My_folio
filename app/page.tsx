"use client";
import "./globals.css";
import Welcome from "@/component/Welcome";

export default function Home() {
  return (
      <div className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory">
        <video
          className="fixed top-0 left-0 w-full h-full object-cover z-0 brightness-50"
          src="/videos/background6.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-30 text-white">
          <div className="h-screen snap-start flex items-center justify-center px-4 animate-pulse">
            <Welcome/>
          </div>
        </div>
      </div>
  );
}