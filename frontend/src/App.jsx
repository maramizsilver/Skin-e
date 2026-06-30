import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Accueil from './pages/Accueil'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <Link to="/" className="navbar__logo">
          Skincare Shop
        </Link>
        <nav className="navbar__links">
          <Link to="/">Catalogue</Link>
          <Link to="/cart">Panier</Link>
          <Link to="/login">Connexion</Link>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App