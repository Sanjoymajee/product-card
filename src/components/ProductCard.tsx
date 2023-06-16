import "../styles/ProductCard.css";

export default function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img
          src="/image-product-mobile.jpg"
          alt="Product-picture-mobile"
          className="Non-desktop-img"
        />
        <img
          src="/image-product-desktop.jpg"
          alt="Product-picture-desktop"
          className="Non-mobile-img"
        />
      </div>
      <div className="product-card__content">
        <div className="product-card__header">
          <h2>Perfume</h2>
        </div>
        <div className="product-card__title">
          <h1>Gabrielle Essence Eau De Parfum</h1>
        </div>
        <div className="product-card__text">
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <div className="product-card__price">
          <span className="product-card__price--new">$149.99</span>
          <span className="product-card__price--old">$169.99</span>
        </div>
        <button>
          <img src="/icon-cart.svg" alt="cart-icon" />
          Add to cart
        </button>
      </div>
    </div>
  );
}
