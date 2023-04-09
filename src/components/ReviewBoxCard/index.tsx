import "./style.css";

const ReviewBoxCard = () => {
  return (
    <div className="card-container">
      <input type="text" id="review" name="review" className="form-control" />
      <button className="btn btn-primary">SALVAR AVALIACAO</button>
    </div>
  );
};

export default ReviewBoxCard;
