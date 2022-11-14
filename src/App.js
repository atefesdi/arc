import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectList from "./pages/ProjectList";

function App() {
  return (
    <div className="bg-neutral-100 min-h-screen">
      <BrowserRouter>


          <Routes>
            <Route path="project-list" element={<ProjectList />} />
            <Route path="project-details" element={<ProjectDetails />} />
          </Routes>
        <SideBar>
        </SideBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
