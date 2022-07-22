import React, { useState } from "react";
import Header from "./components/header";
import feedbackData from "./data/feedbackData";
import FeedbackData from "./data/feedbackData";
import FeedbackList from "./components/feedbackList";
import FeedbackStats from "./components/feedbackStats";
import FeedbackForm from "./components/feedbackForm";
import {v4 as uuidv4} from "uuid"; 

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback= (newFeedback)=> {
    newFeedback.id= uuidv4(); 
    setFeedback([newFeedback, ...feedback]); 
  }; 

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd= {addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
