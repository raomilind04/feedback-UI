import React, {useState} from "react";
import Header from "./components/header"; 
import feedbackData from "./data/feedbackData"; 
import FeedbackData from "./data/feedbackData";
import FeedbackList from "./components/feedbackList"; 


function App() {
    const [feedback, setFeedback]= useState(FeedbackData); 

  return (
    <>
        <Header />
        <div className="container">
            <FeedbackList feedback= {feedback}/>
        </div>
    </>
  )
}

export default App;
