const Product = ({ img, title, body }) => {
  return (
    <div className="product__item">
      <div className="product__icon">
        <img src={img} alt="" />
      </div>
      <h4 className="product__name">{title}</h4>
      <p className="product__text text-main">{body}</p>
      <a href="" className="product__btn">
        Learn More
      </a>
    </div>
  );
}

export default Product;