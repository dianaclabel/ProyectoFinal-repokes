import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { FavoritesPage } from "./pages/favorites/FavoritesPage";
import { NewReportPage } from "./pages/reports/NewReportPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favoritos" element={<FavoritesPage />} />
          <Route path="/reportes/nuevo" element={<NewReportPage />} />
          {/* <Route path="/reportes" element={<ReportsPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
