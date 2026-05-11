import { motion } from "framer-motion";

import LogoImage from "../assets/favicon.svg";

import "../styles/header.css";
import {useState} from "react";

export default function Header({ page }) {

    const [mobileOptionActive, setMobileOptionsActive] = useState(false);

    return (
        <motion.div
            className="header-container"
            initial={{
                opacity: 0,
                y: -80
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            <div className="logo-container">
                <a href="/">
                    <img
                        src={LogoImage.src}
                        alt="Silvyu Coding"
                        width={94}
                        loading="eager"
                    />
                </a>
            </div>

            <div className={`navigation-bar-container mobile-${mobileOptionActive ? "active" : "inactive"}`}>
                <a
                    href="/"
                    className={page === "Home" ? "active" : ""}
                >
                    Home
                </a>

                <a
                    href="/portfolio"
                    className={page === "Portfolio" ? "active" : ""}
                >
                    Portfolio
                </a>

                <a
                    href="/about"
                    className={page === "About" ? "active" : ""}
                >
                    About
                </a>
            </div>

            <div className="cta-button-container">
                <button className="cta-button">
                    Contact me
                </button>
            </div>
            <div className="mobile-option">
                <button onClick={()=>{setMobileOptionsActive((!mobileOptionActive))}}>
                    <div className="menu-icon-button-container">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(0,0,0,1)">
                            <path
                                d="M4 6H20"
                                stroke="black"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />

                            <path
                                d="M4 12H20"
                                stroke="black"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />

                            <path
                                d="M4 18H20"
                                stroke="black"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </motion.div>
    );
}