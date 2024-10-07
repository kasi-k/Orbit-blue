import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Insitution from "./pages/insitution/Insitution";
import Layout from "./pages/layout/Layout";
import Leads from "./pages/Leads/Leads";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/insitution" element={<Insitution/>}/>
            <Route path="/leads" element={<Leads/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
