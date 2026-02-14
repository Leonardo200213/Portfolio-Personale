import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom"
import Hobby from "./pages/Hobby.tsx"
import Dark from "./components/toggleDark.tsx"

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <div className="absolute top-5 right-15">
          <Dark/>
        </div>

        <ul className="flex mx-auto gap-3 mt-6 font-bold text-lg border border-dark-brown bg-white p-2.5 rounded-full w-fit shadow-lg select-none">
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
        <Route path="/hobby" element={<Hobby />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
