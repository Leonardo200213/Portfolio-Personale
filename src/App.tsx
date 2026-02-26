import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom"
import Hobby from "./pages/Hobby.tsx"
import Home from "./pages/Home.tsx"


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <BrowserRouter>
          <div className="relative">
            {/*
            reimportare dark, momentaneamente rimosso per spazio
            <div className="absolute top-5 right-15">
              <Dark/>
            </div>*/}

            <ul className="flex mx-auto gap-3 mt-6 font-bold text-lg border border-dark-brown bg-white p-2.5 rounded-full w-full md:w-fit shadow-lg select-none">
              <li>
                <NavLink
                  to="/home"
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
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      
      </div>
      {/**rivedere div da sistemare
      <div className="bg-darktheme w-full">
        Contatti
      </div>
      */}
    </div>
  )
}

export default App
