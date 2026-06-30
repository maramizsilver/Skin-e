import { useEffect, useState } from 'react'
import ProductGrid from '../components/ProductGrid'
import { getProducts } from '../api/client'
import './Accueil.css'

function Accueil() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({ skin_type: '', category: '' })

  useEffect(() => {
    setLoading(true)
    getProducts(filters)
      .then((data) => {
        setProducts(data)
        setError(null)
      })
      .catch(() => setError("Impossible de charger les produits pour l'instant."))
      .finally(() => setLoading(false))
  }, [filters])

  return (
    <div className="Accueil">
      <section className="Accueil__hero">
        <h1>Trouve les soins faits pour ta peau</h1>
        <p>Parcours notre sélection, ou demande conseil à notre assistant.</p>
      </section>

      <section className="Accueil__filters">
        <select
          value={filters.skin_type}
          onChange={(e) => setFilters((f) => ({ ...f, skin_type: e.target.value }))}
        >
          <option value="">Tous types de peau</option>
          <option value="grasse">Peau grasse</option>
          <option value="seche">Peau sèche</option>
          <option value="mixte">Peau mixte</option>
          <option value="sensible">Peau sensible</option>
        </select>

        <select
          value={filters.category}
          onChange={(e) => setFilters((f) => ({ ...f, category: e.target.value }))}
        >
          <option value="">Toutes catégories</option>
          <option value="nettoyant">Nettoyant</option>
          <option value="serum">Sérum</option>
          <option value="creme">Crème</option>
          <option value="protection_solaire">Protection solaire</option>
        </select>
      </section>

      {loading && <p>Chargement des produits...</p>}
      {error && <p className="Accueil__error">{error}</p>}
      {!loading && !error && <ProductGrid products={products} />}
    </div>
  )
}

export default Accueil