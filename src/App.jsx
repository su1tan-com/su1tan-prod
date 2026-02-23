import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
       <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: "var(--surface)",
            color: "var(--text-primary)",
            border: "1px solid var(--border)",
          },
        }}
      />
        <div className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}