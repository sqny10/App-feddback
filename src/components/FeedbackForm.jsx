import {useState, useContext, useEffect} from "react";
import FeedbackContext from "./context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import Card from "../shared/Card"
import Button from "../shared/Button";

function FeedbackForm() {
    const {addFeedback, feedbackEdit, updateFeedback, setFeedbackEdit} = useContext(FeedbackContext)
    const [rating, setRating] = useState(10);
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("")

    useEffect(() => {
        if(feedbackEdit.edit){
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
            setBtnDisabled(false);
        }
    }, [feedbackEdit]);

    const handleTextChange = (e) => {
        setText(e.currentTarget.value);

        if(text.trim() !== "" && text.trim().length >= 10){
            setBtnDisabled(false);
            setMessage(null)
        }else if(text.trim().length < 10){
            setBtnDisabled(true);
            setMessage("At least 10 character required to add a feedback")
        }else{
            setMessage(null);
            setBtnDisabled(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(text.trim().length >= 10){
            const newFeedback = {
                rating,
                text
            }

            if(feedbackEdit.edit){
                updateFeedback(feedbackEdit.item.id, newFeedback);
                setFeedbackEdit({
                    item: {
                        id: "",
                        text: "",
                        rating: 10
                    },
                    edit: false
                });
                // setRating(10);
            }else{
                addFeedback(newFeedback);
            }
    
            setText("");
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input 
                        onChange={handleTextChange} 
                        type="text" 
                        placeholder="Write a review"
                        value={text}
                    />
                    <Button 
                        type="submit" 
                        isDisabled={btnDisabled}
                    >
                        Send
                    </Button>
                </div>
                {message && <p className="message">{message}</p>}
            </form>
            
        </Card>
    )
}

export default FeedbackForm