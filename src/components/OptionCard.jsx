const OptionCard = props => {
  let { value } = props;

  return (
    <div className="col mb-4">
      <div className="card">
        <img src={''} className="card-img-top" alt="User post" />
      </div>
    </div>
  );
};

export default OptionCard;
