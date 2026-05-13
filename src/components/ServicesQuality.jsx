import {motion} from 'framer-motion';
import "../styles/services-quality.css";
import ShakeHands from "../assets/ShakeHands.png";
import SupportImg from '../assets/Support.jpg';
import SolutionImg from '../assets/solution.png';
import DashboardImg from '../assets/dashboard.png';
import LightingImg from '../assets/lightning.png';

export default function ServicesQuality() {
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
            className="services-quality-container">
            <div className="services-quality-text-container">
                <motion.h2
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
            }}>Why my services?</motion.h2>
                <motion.span
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
            }}>I do not just deliver code. I deliver sustainable solutions for your business.</motion.span>
            </div>
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
                className="services-quality-presentation">
                <div className="services-quality-wrapper">
                    <div className="service-section center">
                        <div className="service-section-box center">
                            <div className="service-section-image">
                                <img src={SupportImg.src} alt={"Collaboration"}/>
                            </div>
                            <div className="service-section-title">
                                <h3>Quality Support 24/7</h3>
                            </div>
                            <div className="service-section-description">
                                <span>You receive fast, non stop support for any urgent task, usually in under 12 hours.</span>
                            </div>
                        </div>
                    </div>
                    <div className="service-section left">
                        <div className="service-section-box">
                            <div className="service-section-image">
                                <img src={ShakeHands.src} alt={"Collaboration"}/>
                            </div>
                            <div className="service-section-title">
                                <h3>Communication & Collaboration</h3>
                            </div>
                            <div className="service-section-description">
                                <span>Understanding the business means half the problem solved</span>
                            </div>
                        </div>
                    </div>
                    <div className="service-section right">
                        <div className="service-section-box">
                            <div className="service-section-title">
                                <div className="service-section-image">
                                    <img src={SolutionImg.src} alt={"Collaboration"} style={{width:32}}/>
                                </div>
                                <h3>Solutions For Real Problems</h3>
                            </div>
                            <div className="service-section-description">
                                <span>I build practical and scalable solutions focused on improving workflows, reducing manual work, and supporting long term business growth.</span>
                            </div>
                        </div>
                        <div className="service-section-box">
                            <div className="service-section-title">
                                <div className="service-section-image">
                                    <img src={DashboardImg.src} alt={"Interface"} style={{width:24}}/>
                                </div>
                                <h3>Easy to Use Interfaces</h3>
                            </div>
                            <div className="service-section-description">
                                <span>Every automation includes a clean web interface, making it simple to manage, monitor, and use without technical complexity.</span>
                            </div>
                        </div>
                        <div className="service-section-box">
                            <div className="service-section-title">
                                <div className="service-section-image">
                                    <img src={LightingImg.src} alt={"Interface"} style={{width:24}}/>
                                </div>
                                <h3>Fast Delivery Time</h3>
                            </div>
                            <div className="service-section-description">
                                <span>I deliver projects quickly without compromising quality, keeping communication clear and development efficient throughout the process.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}