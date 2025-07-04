import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage';
import BuyNowPage from './pages/BuyNowPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/buy-now" element={<BuyNowPage />} />
        <Route path="/survey" element={<SurveyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
