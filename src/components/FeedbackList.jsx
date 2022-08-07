import {motion, AnimatePresence} from "framer-motion";
import {useContext} from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext);

    if(!feedback || feedback.length === 0){
        return (
            <p>No feedback yet</p>
        )
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div 
                        key={item.id}
                        initial={{opacity: 0, scale: 0, height: 0}}
                        animate={{opacity: 1, scale: 1, height: "auto"}}
                        exit={{opacity: 0, scale: 0, height: 0}}
                        transition={{duration: 0.5, ease: "easeOut"}}
                    >
                        <FeedbackItem 
                            key={item.id} 
                            item={item}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )

    // return (
    //     <div className="feedback-list">
    //         {feedback.map((item) => (
    //             <FeedbackItem 
    //                 key={item.id} 
    //                 item={item}
    //                 handleDelete={handleDelete}
    //             />
    //         ))}
    //     </div>
    // )
}

export default FeedbackList