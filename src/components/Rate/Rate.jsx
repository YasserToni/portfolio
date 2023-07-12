import StarRating from "./StarRating";
import "./rate.css";

function Rate() {
  return (
    <div className="rate">
      <StarRating
        maxRating={5}
        className="test"
        message={["Terrible", "Bad", "Okey", "Good", "Amazing"]}
        defaultRating={3}
      />
    </div>
  );
}
export default Rate;
