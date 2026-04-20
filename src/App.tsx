import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Hobby from "./pages/Hobby.tsx";
import Home from "./pages/Home.tsx";
import Lavoro from "./pages/Lavoro.tsx";
import Changelog from "./components/Changelog.tsx";

import { useState, useEffect } from "react";
import OfflinePage from "./pages/Offline.tsx";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [open, setOpen] = useState(false);

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
      <footer className="text-white text-center text-sm md:text-xs py-1.5 mt-20 bg-gray-800">
        <p>by Leonardo Messeri • ©2026 • v1.3</p>
        <div className="mt-1.5">
          <span
            onClick={() => setOpen(true)}
            className="cursor-pointer hover:font-bold hover:text-dark-yellow transition duration-500"
          >
            Changelog
          </span>
        </div>
        <Changelog open={open} onClose={() => setOpen(false)} />
        {/**all-inizio della pagina è false, appena preso il pulsante sopra diventa true */}
      </footer>
    </>
  );
}

export default App;
