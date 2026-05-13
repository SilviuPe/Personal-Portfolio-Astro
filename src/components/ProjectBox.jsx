import {motion} from 'framer-motion'

export default function ProjectBox({title, description, url, image}) {
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
            className="project-box-container">
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
                className="project-box-image-container">
                <img src={image.src} alt="title"/>
            </motion.div>
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
                className="project-box-title-container">
                <h3>{title}</h3>
            </motion.div>
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
                className="project-box-description-container">
                <span>{description}</span>
            </motion.div>
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
                    duration: 0.1,
                    ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{
                    once: false,
                }}
                className="project-box-button-container"
                onClick={() => {document.location.href=url}}>
                <motion.a href={url}>View More</motion.a>
            </motion.div>
        </motion.div>
    )
}