import {motion} from 'framer-motion'
import Project1 from '../assets/projects/1.png';
import Project2 from '../assets/projects/2.png';
import Project3 from '../assets/projects/3.png';

import ProjectBox from "./ProjectBox.jsx";

import "../styles/projects-list.css";

const Projects = [
    {
        title: "CallAPI  Platform",
        description: "CallAPI is a developer-focused API testing platform built to simplify sending and managing HTTP requests. It provides a clean interface for testing APIs, interacting with websites, and organizing endpoint data into reusable collections within a controlled environment.",
        url: "/projects/call-api",
        image: Project1
    },
    {
        title: "Business Search",
        description: "A free client discovery platform for freelancers and small businesses, powered by OpenStreetMap data and designed to simplify finding potential clients worldwide.",
        url: "/projects/business-search",
        image: Project2
    },
    {
        title: "IMS Products Platform",
        description: "IMS Products Platform is a modern inventory management solution that helps businesses track stock levels, monitor product movement, and generate real-time statistics. The platform improves warehouse efficiency, reduces manual errors, and provides clear insights through reports and analytics.",
        url: "/projects/ims-products",
        image: Project3
    }
]

export default function ProjectsList({exceptProject, customTitle}) {
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
            className="projects-list-container">
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
                className="projects-list-title-container">
                <h2>{customTitle ? customTitle : "A Preview Of My Work"}</h2>
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
                className="projects-list-description-container">
                <p>Real projects where I automated processes, built web applications, and improved client operations.</p>
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
                className="projects-list-content">
                {Projects.map((item, index) => (

                        exceptProject !== undefined && index === exceptProject
                    ? null
                    : <motion.div
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
                            key={`box-${item}-${index}`}>
                            <ProjectBox title={item.title} description={item.description} url={item.url} image={item.image} />
                        </motion.div>

                ))}
            </motion.div>
        </motion.div>
    )
}