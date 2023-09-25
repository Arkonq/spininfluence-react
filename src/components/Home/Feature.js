const Feature = ({img, title, body}) => {
  return (
    <div className="features__item">
      <div className="features__icon">
        <img src={img} alt="" />
      </div>
      <h4 className="features__name">{title}</h4>
      <p className="features__text text-main">{body}</p>
    </div>
  );
}

export default Feature;