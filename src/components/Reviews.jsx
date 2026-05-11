import {motion} from "framer-motion";
import ReviewBox from './ReviewBox.jsx';
import starIcon from '../assets/star.png';
import codingIcon from '../assets/codingIcon.svg';
import "../styles/reviews.css";

const ReviewsList = [
    {
        name: "@keegantalvalmaa",
        review: "He went above and beyond to help us with this tool. It will save us a lot of time and effort in the long run. I am looking forward to working with him again in the future.",
        position: "manager"
    },
    {
        name: "@Amigoen",
        review: "Excellent work! The developer was professional, communicative, and delivered everything promised. I truly appreciate the attention to detail and the quality of the final product. Highly recommended. I will definitely work with you again on future projects.",
        position: "individual"
    },
    {
        name: "@eve_at_large",
        review: "Silviu is genuinely kind and intelligent. He was patient with me while I worked through my issues and took the time to explain both the \"why\" and the \"how\". He carefully identified the problems and addressed them at the root. My application works perfectly now, entirely thanks to him. I believe he has a very bright future ahead.",
        position: "individual"
    },
    {
        name: "@LioraStudio",
        review: "Silviu delivered everything perfectly and it was a pleasure to work with him on this project. I will definitely return for future projects. Thank you!",
        position: "designer"
    },
    {
        name: "@normlist",
        review: "You set a very high bar for our future collaborators. Fast work, fast communication. Perfect.",
        position: "US Start-up"
    },
]

export default function Reviews() {
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
            className="overview-reviews-container">
            <div className="overview-reviews-content">
                <div className="star-container">
                    <img src={starIcon.src} alt="star icon" width={22}/>
                    <img src={starIcon.src} alt="star icon" width={22}/>
                    <img className="coding-icon" src={codingIcon.src} alt="coding icon" width={40}/>
                    <img src={starIcon.src} alt="star icon" width={22}/>
                    <img src={starIcon.src} alt="star icon" width={22}/>
                </div>
                <div className="title-container">
                    <motion.h2
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1]}}>Helping Entrepreneurs Worldwide</motion.h2>
                </div>
                <div className="description-container">
                    <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1]}}>Since 2022, I have been helping entrepreneurs, small teams, and startups work faster, simpler, and with less friction.</motion.p>
                </div>
                <div className="reviews-list-container">
                    <div className="reviews-track">
                        {[...ReviewsList, ...ReviewsList].map((review, index) => (
                            <div key={`review-${index}`}>
                                <ReviewBox
                                    name={review.name}
                                    review={review.review}
                                    position={review.position}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="reviews-list-container reverse">
                    <div className="reviews-track reverse">
                        {[...ReviewsList.reverse(), ...ReviewsList.reverse()].map((review, index) => (
                            <div key={`review-${index}`}>
                                <ReviewBox
                                    name={review.name}
                                    review={review.review}
                                    position={review.position}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}