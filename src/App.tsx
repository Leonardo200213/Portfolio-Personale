import { BrowserRouter, NavLink } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div >
        <ul className="flex mx-auto gap-5 mt-6 font-bold text-lg border border-gray-500 p-2.5 rounded-full w-fit shadow-lg select-none">
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
    </BrowserRouter>

      
  )
}

export default App
