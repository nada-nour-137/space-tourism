import { title } from "framer-motion/client";
import { useState } from "react";

export default function Crew() {
  const crewMembers = [
    {
      title: "Commander",
      name: "Douglas Hurley",
      info:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: "/assets/crew/image-douglas-hurley.png",
    },
 {
  title:"Mission Specialist",
  name:"Mark Shuttleworth",
  info:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  image:"/assets/crew/image-mark-shuttleworth.png",
 },
  {
  title:"pilot",
  name:"Victor Glover",
  info:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  image:"/assets/crew/image-victor-glover.png",
 },
   {
  title:"Flight Engineer",
  name:"anousheh ansari",
  info:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  image:"/assets/crew/image-anousheh-ansari.png",
 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = crewMembers[currentIndex];

  return (
    <div className="responsive-bg-crew min-h-screen w-full pt-24 flex flex-col pb-24">
      {/* Section title */}
      <p className="text-3xl text-white/25 tracking-wider font-barlow font-bold text-center md:text-left px-6 md:px-16 mt-12 mb-24">
        02{" "}
        <span className="text-3xl text-white font-barlow tracking-widest font-normal uppercase">
          Meet your crew
        </span>
      </p>

      {/* Content block */}
      <div className="bg-transparent text-white flex flex-col-reverse md:flex-row items-start justify-between px-6 md:px-16 py-10 flex-grow">
        {/* Text section */}
        <div className="w-full md:w-1/2 max-w-xl text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bellefair text-gray-400 uppercase tracking-widest mb-2">
            {current.title}
          </h2>
          <h1 className="text-6xl md:text-6xl font-bellefair uppercase mb-6">
            {current.name}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            {current.info}
          </p>

          {/* Desktop-only dots */}
          <div className="hidden md:flex gap-4 mt-8 justify-start">
            {crewMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? "bg-white" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile-only image + dots */}
        <div className="block md:hidden w-full flex flex-col items-center mt-6">
          {/* Dots on mobile */}
          <div className="flex gap-4 mb-6 justify-center">
            {crewMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? "bg-white" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          {/* Image on mobile */}
          <img
            src={current.image}
            alt={current.name}
            className="h-[400px] object-contain"
          />
        </div>

        {/* Image on desktop */}
        <div className="hidden md:flex w-1/2 justify-end">
          <img
            src={current.image}
            alt={current.name}
            className="h-[800px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
