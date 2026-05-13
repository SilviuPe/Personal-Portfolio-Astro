import {motion} from "framer-motion";

export default function ReviewBox({name, review, position}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 80
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{
                once: false,
            }}
            className="review-box-container">
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