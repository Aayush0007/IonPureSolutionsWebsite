// src/components/UnderConstruction.jsx
import React from 'react';
import './CityAnimation.css'; 

const UnderConstruction = () => {
  return (
    <div className="city-container">
      
      {/* --- Atmospheric Elements --- */}
      <div className="sun"></div>
      <div className="cloud-wrapper">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
      </div>

      {/* --- Main Content (Glassmorphism Card) --- */}
      <section className="advice">
        <div className="glass-card">
            {/* Elegant Logo / Icon */}
            <div className="mb-4">
                <span className="inline-block p-2 rounded-lg bg-slate-100 text-slate-400 border border-slate-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-700 tracking-tight mb-3">
                IonPure Solutions
            </h1>
            
            <div className="mb-8">
                <p className="text-lg md:text-xl text-slate-500 font-mono typing-text inline-block">
                    &lt;building_the_future /&gt;
                </p>
            </div>

            {/* Elegant Progress Bar */}
            <div className="w-full max-w-[280px] bg-slate-100 rounded-full h-2 mb-3 overflow-hidden border border-slate-200">
                <div 
                    className="bg-gradient-to-r from-slate-400 to-sky-400 h-2 rounded-full animate-[width_2s_ease-out_forwards]" 
                    style={{ width: '85%', transition: 'width 1s' }}
                ></div>
            </div>
            
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Website Launching Soon</p>
        </div>
      </section>

      {/* --- City Animation Section --- */}
      <section className="city-stuff">
        
        {/* Skyscrapers */}
        <ul className="skyscrappers__list">
          <li className="skyscrapper__item skyscrapper-1"></li>
          <li className="skyscrapper__item skyscrapper-2"></li>
          <li className="skyscrapper__item skyscrapper-3"></li>
          <li className="skyscrapper__item skyscrapper-4"></li>
          <li className="skyscrapper__item skyscrapper-5"></li>
        </ul>

        {/* Trees */}
        <ul className="tree__container">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <ul key={num} className={`tree__item tree-${num}`}>
              <li className="tree__trunk"></li>
              <li className="tree__leaves"></li>
            </ul>
          ))}
        </ul>

        {/* Cranes */}
        {[1, 2, 3].map((num) => (
            <ul key={num} className={`crane__list crane-${num}`}>
            <li className="crane__item crane-cable crane-cable-1"></li>
            <li className="crane__item crane-cable crane-cable-2"></li>
            <li className="crane__item crane-cable crane-cable-3"></li>
            <li className="crane__item crane-stand"></li>
            <li className="crane__item crane-weight"></li>
            <li className="crane__item crane-cabin"></li>
            <li className="crane__item crane-arm"></li>
            </ul>
        ))}

      </section>
    </div>
  );
};

export default UnderConstruction;