import { useState } from "react";

export default function Destination() {
  const destinations = ['Moon', 'Mars', 'Europa', 'Titan'];
  const [activeTab, setActiveTab] = useState("Moon");

  const info = [
    {
      title: 'Moon',
      text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 Km",
      travel: "3 DAYS"
    },
    {
      title: 'Mars',
      text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. km",
      travel: "9 MONTHS"
    },
    {
      title: 'Europa',
      text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. km",
      travel: "3 YEARS"
    },
    {
      title: 'Titan',
      text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. km",
      travel: "7 YEARS"
    }
  ];

  const currentInfo = info.find(dest => dest.title === activeTab);

  return (
    <div className="responsive-bg-destination min-h-screen w-full pt-24 flex flex-col pb-24">

           <p className="text-3xl text-white/25 tracking-wider font-barlow font-bold text-center md:text-left px-6 md:px-16 mt-12 mb-24">
        01{" "}
        <span className="text-3xl text-white font-barlow tracking-widest font-normal uppercase">
          pick your destination
        </span>
      </p>

     <div className="flex flex-col lg:flex-row flex-wrap items-center gap-20 mt-12 px-6 lg:px-32 w-full">

        {/* Image */}
        <img
          className="w-72 h-72 md:w-[350px] md:h-[350px] lg:w-[445px] lg:h-[445px] object-contain"
          src={`/assets/destination/image-${activeTab.toLowerCase()}.png`}
          alt={activeTab}
        />

        {/* Tabs + Info */}
        <div className="flex flex-col items-center lg:items-start text-white max-w-2xl">
          {/* Tabs */}
          <ul className="flex space-x-6 text-xl font-barlow tracking-widest uppercase mb-6">
            {destinations.map((name) => (
              <li
                key={name}
                className={`cursor-pointer pb-2 ${
                  activeTab === name
                    ? "border-b-2 border-white text-white"
                    : "text-white/50 hover:text-white"
                }`}
                onClick={() => setActiveTab(name)}
              >
                {name}
              </li>
            ))}
          </ul>

          {/* Info */}
          <h2 className="text-6xl font-bellefair uppercase mb-4">{currentInfo.title}</h2>

         <div className="w-full max-w-2xl px-4 lg:px-0 lg:max-w-xl">

 

  <p className="text-blue-300 text-lg text-center lg:text-left mb-10 leading-relaxed">
    {currentInfo.text}
  </p>
  
</div>

          {/* Distance & Travel */}
          <div className="flex flex-col sm:flex-row gap-12 border-t border-white/20 pt-8">
            <div>
              <h3 className="text-sm font-barlow uppercase text-blue-300 tracking-widest mb-2">Avg. Distance</h3>
              <p className="text-2xl font-bellefair uppercase">{currentInfo.distance}</p>
            </div>
            <div>
              <h3 className="text-sm font-barlow uppercase text-blue-300 tracking-widest mb-2">Est. Travel Time</h3>
              <p className="text-2xl font-bellefair uppercase">{currentInfo.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
