import { Review } from "utils/typesUtils";
import { ReactComponent as Star } from "../../assets/images/star.svg";
import "./style.css";

type Props = {
  review: Review;
};

const ReviewItem = ({ review }: Props) => {
  return (
    <div className="review-item">
      <div className="review-author">
        <Star /> {review.user.name}
      </div>
      <div className="review-content">
        <p>{review.text}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
