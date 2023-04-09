import { ReactComponent as Star } from "../../assets/images/star.svg";
import "./style.css";

const ReviewItem = () => {
  return (
    <div className="review-item">
      <div className="review-author">
        <Star /> Pessoa
      </div>
      <div className="review-content">
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
      </div>
    </div>
  );
};

export default ReviewItem;
