import Card from "../shared/card";
import propTypes from "prop-types"; 
import {FaTimes} from "react-icons/fa"; 

function FeedBackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <buttom onClick= {()=> handleDelete(item.id)} className= "close">
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
