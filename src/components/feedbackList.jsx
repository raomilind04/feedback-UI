import FeedBackItem from "./feedbackItem";
import propTypes from "prop-types";

function FeedbackList({ feedback, handleDelete }) {
  console.log(feedback);
  return (
    <div className="feedback-list">
      {feedback.map((item, index) => {
        return (
          <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}
FeedbackList.propTypes = {
  feedback: propTypes.array,
};

export default FeedbackList;
