import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
/* Import des composants nécessaires pour la navigation dans l'application. */
import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
import NewsListPage from './pages/NewsListPage';
import AboutUs from './pages/AboutUs';
import Calendrier from './pages/Calendrier';
import CalendrierPage from './pages/CalendrierPage';
import Galerie from './pages/Galerie';
import GaleriePage from './pages/GaleriePage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Home />} />
        
        {/* Route pour la liste des actualités */}
        <Route path="/Actualites" element={<NewsListPage />} />
        
        {/* Route pour afficher les détails d'une actualité spécifique, remplacez "id" par un paramètre dynamique dans les liens */}
        <Route path="/Actualites/id" element={<NewsPage />} />
        
        {/* Route pour la page "À propos" du club */}
        <Route path="/a-propos" element={<AboutUs />} />
        
        {/* Route pour la page du calendrier */}
        <Route path="/Calendrier" element={<Calendrier />} />
        
        {/* Route pour afficher les détails d'un événement spécifique du calendrier */}
        <Route path="/Calendrier/event" element={<CalendrierPage />} />
        
        {/* Route pour la page de galerie */}
        <Route path="/Galerie" element={<Galerie />} />
        
        {/* Route pour afficher les détails d'une galerie d'un membre spécifique */}
        <Route path="/Galerie/member" element={<GaleriePage />} />
        
        {/* Route pour la page d'inscription */}
        <Route path="Inscription" element={<Register />} />
        
        {/* Route pour la page de connexion */}
        <Route path="Connexion" element={<Login />} />
      </Routes>
  );
}

export default App;
