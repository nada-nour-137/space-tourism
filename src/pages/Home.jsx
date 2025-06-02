import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="responsive-bg h-screen flex items-center justify-center px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-16 md:gap-x-32 text-white">
        
        {/* Text Content */}
        <article className="text-center md:text-left max-w-xl">
          <h1 className="text-2xl md:text-3xl uppercase font-barlow tracking-widest mb-4">
            So, you want to travel to
            <span className="block text-7xl md:text-9xl font-bellefair mt-4">
              Space
            </span>
          </h1>
          <p className="text-blue-300 text-lg md:text-xl mt-4 leading-relaxed">
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well, sit back, and relax because we'll give you a truly out of this world experience!
          </p>
        </article>

        {/* Explore Button */}
        <article>
          <Link to="/destination">
            <button className="text-black bg-white rounded-full w-[272px] h-[272px] flex items-center justify-center text-3xl uppercase font-bellefair transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.7),_0_0_60px_rgba(255,255,255,0.5)]">
              Explore
            </button>
          </Link>
        </article>
      </div>
    </div>
  );
};

export default Home;
