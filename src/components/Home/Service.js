const Service = ({img, title, body}) => {
  return (
    <div className="service__item">
      <div className="service__img">
        <img src={img} alt="" />
      </div>
      <div className="service__info">
        <h4 className="service__name">{title}</h4>
        <p className="service__text">{body}</p>
      </div>
    </div>
  );
}

export default Service;