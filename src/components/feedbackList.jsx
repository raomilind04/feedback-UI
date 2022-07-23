import FeedBackItem from "./feedbackItem";
import propTypes from "prop-types";
import {motion, AnimatePresence} from "framer-motion"; 
import FeedbackContext from "../context/feedbackContext";
import {useContext} from "react"; 
import Spinner from "../shared/spinner";

function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext); 

  return (
    isLoading ? <Spinner /> : <div className="feedback-list">
    <AnimatePresence>
      {feedback.map((item, index) => {
        return (
          <motion.div key= {item.id} initial= {{opacity: 0}} animate= {{opacity: 1}} exit= {{opacity: 0}}>
          <FeedBackItem key={item.id} item={item}  />
          </motion.div>
        );
      })}
      </AnimatePresence>
    </div>
  )
}



export default FeedbackList;
