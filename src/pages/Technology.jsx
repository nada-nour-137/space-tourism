import { useState } from "react"
export default function Technology() {

const contents=[
  {
    title:"LAUNCH VEHICLE",
    description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
     image: {
      portrait: 'assets/technology/image-launch-vehicle-portrait.jpg',
      landscape: 'assets/technology/image-launch-vehicle-landscape.jpg',}
  },
  {
    title:"space port",
    description:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
     image: {
      portrait: 'assets/technology/image-spaceport-portrait.jpg',
      landscape: 'assets/technology/image-spaceport-landscape.jpg',}
  },
  {
    title:"space capsule",
    description:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
     image: {
      portrait: 'assets/technology/image-space-capsule-portrait.jpg',
      landscape: 'assets/technology/image-space-capsule-landscape.jpg',}
  },
]
const [activeIndex,setActiveIndex]=useState(0);

  return  (  
<div className="responsive-bg-tech min-h-screen w-full pt-24 pb-24 px-4 overflow-y-auto">
      <p className="text-3xl text-white/25 tracking-wider font-barlow font-bold text-center md:text-left px-6 md:px-16 mt-12 mb-24">
        03{" "}
        <span className="text-3xl text-white font-barlow tracking-widest font-normal uppercase">
          space launch 101
        </span>
      </p>

 
  <div className="flex flex-col-reverse md:flex-row items-center md:items-start px-8 space-y-12 md:space-y-0 md:space-x-12">
    
   
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
      
  
      <div className="flex flex-row md:flex-col items-center space-x-6 md:space-x-0 md:space-y-6">
        {contents.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-3xl font-bellefair w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300
              ${
                activeIndex === index
                  ? 'bg-white text-black'
                  : 'border-white text-white hover:bg-white hover:text-black'
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center space-y-4 text-center md:text-left max-w-xl">
        <p className="text-3xl font-bellefair text-gray-400 uppercase">
          THE TERMINOLOGY…
        </p>
        <h2 className="text-6xl font-bellefair uppercase text-white">{contents[activeIndex].title}</h2>
        <p className="text-lg text-blue-300 font-barlow">{contents[activeIndex].description}</p>
      </div>
    </div>

    {/* Image */}
    <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-8 mt-8 md:mt-0 mb-4">
  <img
    src={contents[activeIndex].image.portrait}
    alt={contents[activeIndex].title}
    className="hidden md:block w-full max-h-[500px] object-contain"
  />
  <img
    src={contents[activeIndex].image.landscape}
    alt={contents[activeIndex].title}
    className="block md:hidden w-full h-auto object-contain"
  />
</div>
  </div>
</div>

   )}