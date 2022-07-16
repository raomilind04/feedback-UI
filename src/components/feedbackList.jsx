import FeedBackItem from "./feedbackItem";

function FeedbackList({feedback}){
    console.log(feedback); 
    return(
        <div className="feedback-list">
            {feedback.map((item, index)=> {
                return(
                    <FeedBackItem key={item.id} item={item} />
                )
            })}
        </div>
    ); 
}

export default FeedbackList; 