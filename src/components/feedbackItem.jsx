import Card from "../shared/card";
import propTypes from "prop-types"; 
import {FaTimes} from "react-icons/fa"; 
import {useContext} from "react"; 
import FeedbackContext from "../context/feedbackContext";

function FeedBackItem({ item }) {
  const {deleteFeedback}= useContext(FeedbackContext); 
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <buttom onClick= {()=> deleteFeedback(item.id)} className= "close">
        <FaTimes color="purple"/>
      </buttom>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedBackItem.propTypes= {
    item: propTypes.object.isRequired
}

export default FeedBackItem;
