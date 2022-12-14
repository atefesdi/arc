import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectList from "./pages/ProjectList";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-neutral-100 min-h-screen flex flex-row">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="project-list" element={<ProjectList />} />
          <Route path="project-details/:id" element={<ProjectDetails />} />        
          <Route path="project-details/*" element={<ProjectDetails />} />        
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
