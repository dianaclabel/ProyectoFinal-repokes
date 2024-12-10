import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { FavoritesPage } from "./pages/favorites/FavoritesPage";
import { NewReportPage } from "./pages/reports/NewReportPage";
import { ReportsPage } from "./pages/reports/ReportsPage";
import { NavBar } from "./components/NavBar";
import { FavoritesProvider } from "./context/favorites";

function App() {
  return (
    <>
      <BrowserRouter>
        <FavoritesProvider>
          <NavBar />
          <div className="container mx-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/favoritos" element={<FavoritesPage />} />
              <Route path="/reportes/nuevo" element={<NewReportPage />} />
              <Route path="/reportes" element={<ReportsPage />} />
            </Routes>
          </div>
        </FavoritesProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
