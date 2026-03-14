import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom"
import Hobby from "./pages/Hobby.tsx"
import Home from "./pages/Home.tsx"
import Lavoro from "./pages/Lavoro.tsx"

import { useState, useEffect } from 'react';
import OfflinePage from './pages/Offline.tsx';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);


  return (
    <div>
      {isOnline ? (
        <div>
      
          <div className="flex flex-col min-h-screen">
            <div className="flex-1">
              <BrowserRouter>
              
                <div className="relative">
                  {/*
                  reimportare dark, momentaneamente rimosso per spazio
                  <div className="absolute top-5 right-15">
                    <Dark/>
                  </div>*/}

                  <ul className="flex mx-auto gap-2.5 md:gap-3
                    font-bold text-md md:text-lg
                    border border-dark-brown bg-white
                    p-2.5 mt-6
                    rounded-full w-full md:w-fit shadow-lg select-none
                    justify-center">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/work"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                      >
                        Lavoro
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/hobby"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                      >
                        Hobby
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <Routes>
                  {/**collegamenti alle pagine */}
                  <Route path="/hobby" element={<Hobby />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/work" element={<Lavoro />} />
                </Routes>
              </BrowserRouter>
            
            </div>
          </div>
        </div>
      ) : (
        <OfflinePage/>
      )}
    </div>
  )
}

export default App;
