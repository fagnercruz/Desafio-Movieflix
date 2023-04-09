import ReviewItem from "components/ReviewItem";
import "./style.css";

const ReviewList = () => {
  return (
    <div className="reviewList-Container">
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </div>
  );
};

export default ReviewList;
