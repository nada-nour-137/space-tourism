/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
    },
   
    extend: {
       backgroundImage:{
      'bg-desktop': "url('/assets/home/background-home-desktop.jpg')",
      'bg-mobile': "url('/assets/home/background-home-mobile.jpg')",
      'bg-tablet':"url('/assets/home/background-home-tablet.jpg')",
      'bg-destination-desktop':"url('/assets/destination/background-destination-desktop.jpg')",
      'bg-destination-mobile': "url('/assets/destination/background-destination-mobile.jpg')",
      'bg-destination-tablet':"url('/assets/destination/background-destination-tablet.jpg')",
      'bg-crew-desktop':"url('/assets/crew/background-crew-desktop.jpg')",
      'bg-crew-mobile':"url('/assets/crew/background-crew-mobile.jpg')",
      'bg-crew-tablet':"url('/assets/crew/background-crew-tablet.jpg')",
      'bg-tech-desktop':"url('/assets/technology/background-technology-desktop.jpg')",
      'bg-tech-mobile':"url('/assets/technology/background-technology-mobile.jpg')",
      'bg-tech-tablet':"url('/assets/technology/background-technology-tablet.jpg')",


    },
    fontFamily: {
        barlow: ['"Barlow Condensed"', 'sans-serif'],
        bellefair:['"BelleFair"','sans-serif']
        
    },
  },
  plugins: [],
}
}
