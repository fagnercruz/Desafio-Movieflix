import ReviewItem from "components/ReviewItem";
import "./style.css";
import { Review } from "utils/typesUtils";

type Props = {
  reviews: Review[];
};

const ReviewList = ({ reviews }: Props) => {
  return (
    <div className="reviewList-Container">
      {reviews.map((review) => {
        return <ReviewItem review={review} key={review.id} />;
      })}
    </div>
  );
};

export default ReviewList;
