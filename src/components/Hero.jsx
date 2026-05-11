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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
            className="tag"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{
                once: false,
            }}>
              Software Developer
            </motion.div>
            <motion.h1
                className="title"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
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
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.25,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >
                Automations and web platforms that grow your business, not your workload
            </motion.p>

            <motion.div
                className="buttons-container"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.45,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >
                <button className="cta-button">
                    Get in touch
                </button>

                <button className="portfolio">
                    View Portfolio
                </button>
            </motion.div>

            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.8
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    delay: 0.6,
                    duration: 1
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