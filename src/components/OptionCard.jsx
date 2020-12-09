const OptionCard = props => {
  let { id, src, alt } = props;
  return (
    <div className="col mb-4">
      <div className="card option-card">
        <img className="card-img-top img-style" id={id} src={src} alt={alt} />
      </div>
    </div>
  );
};

export default OptionCard;
