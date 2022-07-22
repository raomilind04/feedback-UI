import React,{useState} from "react"; 
import Card from "../shared/card"; 
import Button from "../shared/button"
import RatingSelect from "./ratingSelect";
import {v4 as uuidv4} from "uuid"; 
import {useContext} from "react"; 
import FeedbackContext from "../context/feedbackContext";

function FeedbackForm(){

    const {addFeedback}= useContext(FeedbackContext); 
    const [text, setText]= useState(""); 
    const [btnDisabled, setBtnDisabled]= useState(true); 
    const [message, setMessage]= useState(""); 
    const [rating, setRating]= useState(10); 

    const handleTextChange= (event)=> {
        if(text=== ""){
            setBtnDisabled(true); 
            setMessage(null); 
        }else if(text!== "" && text.trim().length<= 10){
            setBtnDisabled(true);
            setMessage("Text must be atleast 10 characters"); 
        }else {
            setBtnDisabled(false); 
            setMessage(null); 
        }
        setText(event.target.value); 
    }
    const handleSubmit= (e)=> {
        e.preventDefault(); 
        if(text.trim().length>= 10){
            const newFeedback = {
                text: text,
                rating: rating
            }
            addFeedback(newFeedback); 
            setText(""); 
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How was your experience with us ?</h2>
                <RatingSelect select= {(rating)=> setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} value= {text} type= "text" placeholder="Tell us more" />
                    <Button type= "submit" isDisabled= {btnDisabled}>Submit</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    ); 
}

export default FeedbackForm; 