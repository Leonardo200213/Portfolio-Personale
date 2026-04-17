import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Hobby from "./pages/Hobby.tsx";
import Home from "./pages/Home.tsx";
import Lavoro from "./pages/Lavoro.tsx";

import { useState, useEffect } from "react";
import OfflinePage from "./pages/Offline.tsx";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
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

                    <ul
                      className="flex mx-auto gap-2.5 md:gap-3
                    font-bold text-lg md:text-xl
                    border border-dark-brown bg-white
                    p-2.5 mt-6
                    rounded-full w-fit shadow-lg select-none
                    justify-center"
                    >
                      <li>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                          }
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/work"
                          className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                          }
                        >
                          Lavoro
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/hobby"
                          className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                          }
                        >
                          Hobby
                        </NavLink>
                      </li>
                    </ul>

                    <p className="text-center mt-3.5 text-sm text-gray-500">
                      Creato da Leonardo Messeri
                    </p>
                  </div>

                  <Routes>
                    {/**collegamenti alle pagine */}
                    <Route path="/" element={<Home />} />
                    <Route path="/work" element={<Lavoro />} />
                    <Route path="/hobby" element={<Hobby />} />
                  </Routes>
                </BrowserRouter>
              </div>
            </div>
          </div>
        ) : (
          <OfflinePage />
        )}
      </div>
      <div className="mt-15 pt-15 bg-linear-to-t from-gray-600 to-transparent"></div>
      <footer className="text-white text-center text-sm md:text-xs py-1.5 bg-gray-600">
        <p>by Leonardo Messeri • ©2026 • v1.3</p>
        <div className="mt-1.5">
          <span className="cursor-pointer hover:font-bold transition hover:text-amber-600">
            Changelog
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
