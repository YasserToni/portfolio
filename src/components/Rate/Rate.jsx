import StarRating from "./StarRating";
import './rate.css'
function Rate() {
        return (
                <div className="rating">
                        <div className="rating-title">You can rate my website: </div>
                        <StarRating size={30}/>
                </div>
        )
}
export default Rate;