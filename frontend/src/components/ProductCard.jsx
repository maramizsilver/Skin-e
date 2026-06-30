import './ProductCard.css'

function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={() => onClick?.(product)}>
      <div className="product-card__image-wrapper">
        <img
          src={product.image_url || '/placeholder-product.png'}
          alt={product.name}
          className="product-card__image"
        />
      </div>
      <div className="product-card__info">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__category">{product.category}</p>
        <p className="product-card__price">{product.price} DT</p>
        {product.skin_type && (
          <span className="product-card__tag">{product.skin_type}</span>
        )}
      </div>
    </div>
  )
}

export default ProductCard