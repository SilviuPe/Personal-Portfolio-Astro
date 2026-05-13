import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import lottie from "lottie-web";

import CodingAnimation from "../assets/animations/Coding Animation.json";

export default function Hero() {

    const animationContainer = useRef(null);

    useEffect(() => {

        const animation = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: CodingAnimation
        });

        return () => animation.destroy();

    }, []);

    return (
        <motion.div
            className="hero-section-container"
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
        >
            <motion.div
            className="tag"
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
            }}>
              Software Developer
            </motion.div>
            <motion.h1
                className="title"
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
            >
                Automations & Web Platforms
            </motion.h1>

            <motion.p
                className="description"
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
            >
                Automations and web platforms that grow your business, not your workload
            </motion.p>

            <motion.div
                className="buttons-container"
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
            >
                <button className="cta-button" onClick={()=> {document.location.href = "/contact"}}>
                    Get in touch
                </button>

                <button className="portfolio" onClick={()=> {document.location.href = "/portfolio"}}>
                    View Portfolio
                </button>
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
                className="lottie-container"
            >
                <div
                    ref={animationContainer}
                    style={{
                        maxWidth: "500px",
                        height: "500px",
                        boxSizing: "border-box",
                    }}
                />
            </motion.div>
        </motion.div>
    );
}