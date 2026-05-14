import {motion} from 'framer-motion'
import '../styles/developer-section.css';

import AutomationIcon from '../assets/automation.png';
import WebIcon from '../assets/globe.png';
import ToolsIcon from '../assets/tools.png';
import DeveloperImage from '../assets/developer.png';

const AnimationSettings = {
    initial :{
    opacity: 0,
        y: 80
},
whileInView :{
    opacity: 1,
        y: 0
},
transition :{
    duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
},
viewport :{
    once: false,
},
}
export default function DeveloperSection() {
    return (
        <motion.div {...AnimationSettings} className="developer-section-container">
            <div className="developer-section-wrapper">
                <motion.div {...AnimationSettings} className="developer-section-left-side">
                    <img src={DeveloperImage.src}/>
                </motion.div>
                <motion.div {...AnimationSettings} className="developer-section-right-side">
                    <motion.div {...AnimationSettings} className="services-introduction">
                        <motion.h2 {...AnimationSettings}>Hey I'm Silviu.</motion.h2>
                        <motion.p {...AnimationSettings}>I build platforms, automations, and AI integrations that help businesses work faster and smarter.</motion.p>
                        <motion.div {...AnimationSettings} className="service-tag">
                            <p>Services I Offer</p>
                        </motion.div>
                    </motion.div>
                    <motion.div {...AnimationSettings} className="services-list">
                        <motion.div {...AnimationSettings} className="service-description-container">
                            <img src={AutomationIcon.src} width={24}/>
                            <motion.div {...AnimationSettings} className="service-description">
                                <h3>Automations</h3>
                                <p>Save time by automating repetitive tasks and workflows.</p>
                            </motion.div>
                        </motion.div>
                        <motion.div {...AnimationSettings} className="service-description-container">
                            <img src={WebIcon.src} width={24}/>
                            <motion.div {...AnimationSettings} className="service-description">
                                <h3>Web Platforms</h3>
                                <p>Custom web solutions built for performance and usability.</p>
                            </motion.div>
                        </motion.div>
                        <motion.div {...AnimationSettings} className="service-description-container">
                            <img src={ToolsIcon.src} width={24}/>
                            <motion.div {...AnimationSettings} className="service-description">
                                <h3>AI & Tool Integrations</h3>
                                <p>Connect AI and online tools to optimize your business.</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}