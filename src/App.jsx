import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { NewReportPage } from "./pages/reports/NewReportPage";
import { ReportsPage } from "./pages/reports/ReportsPage";
import { NavBar } from "./components/NavBar";
import { FavoritesProvider } from "./context/favorites";
import { TypePage } from "./pages/type/TypePage";
import { FavoritesPage } from "./pages/Favorites/FavoritesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <FavoritesProvider>
          <NavBar />
          <div className="container mx-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tipos/:name" element={<TypePage />} />
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
