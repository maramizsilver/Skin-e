import ProductCard from './ProductCard'
import './ProductGrid.css'

function ProductGrid({ products, onProductClick }) {
  if (!products || products.length === 0) {
    return <p className="product-grid__empty">Aucun produit trouvé.</p>
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={onProductClick}
        />
      ))}
    </div>
  )
}

export default ProductGrid