import FeedBackItem from "./feedbackItem";
import propTypes from "prop-types";
import {motion, AnimatePresence} from "framer-motion"; 

function FeedbackList({ feedback, handleDelete }) {
  console.log(feedback);
  return (
    <div className="feedback-list">
    <AnimatePresence>
      {feedback.map((item, index) => {
        return (
          <motion.div key= {item.id} initial= {{opacity: 0}} animate= {{opacity: 1}} exit= {{opacity: 0}}>
          <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
          </motion.div>
        );
      })}
      </AnimatePresence>
    </div>
  );
}
FeedbackList.propTypes = {
  feedback: propTypes.array,
};

export default FeedbackList;
