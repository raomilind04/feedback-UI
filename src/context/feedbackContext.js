import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/feedbackData";

const FeedbackContext = createContext();


export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading]= useState(true); 
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  useEffect(()=> {
    fetchFeedback(); 
  }, []); 
  
 const fetchFeedback= async ()=> {
    const response= await fetch("http://localhost:4000/feedback?_sort=id&_order=desc"); 
    const data= await response.json(); 
    setFeedback(data); 
    setIsLoading(false); 
 }; 
  
  const updateFeedback= (id, updateItem)=> {
     setFeedback(feedback.map((item)=> {
        return item.id=== id ? {...item, ...updateItem} : item
     }))
  }

  const editFeedback= (item)=> {
    setFeedbackEdit({
        item,
        edit: true
    })
  }

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
