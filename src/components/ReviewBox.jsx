import {motion} from "framer-motion";

export default function ReviewBox({name, review, position}) {
    return (
        <motion.div className="review-box-container">
            <div className="review-box-nav-container">
                <p>{name}</p>
            </div>
            <div className="review-box-description-container">
                <span>{review}</span>
            </div>
            <div className="review-box-position-container">
                <span>{position}</span>
            </div>
        </motion.div>
    )
}