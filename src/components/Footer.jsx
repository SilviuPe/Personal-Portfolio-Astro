import {motion} from "framer-motion";
import LogoImage from "../assets/favicon.svg";

import "../styles/footer.css"

export default function Footer({page}) {
    return <motion.div className="footer-container">
        <motion.div className="footer-wrapper">
            <motion.div className="footer-left-side">
                <motion.div className="logo-container">
                    <a href="/">
                        <img
                            src={LogoImage.src}
                            alt="Silvyu Coding"
                            width={94}
                            loading="eager"
                        />
                    </a>
                </motion.div>
                <motion.div className="description-container">
                    Developing Software Solutions for Businesses
                </motion.div>
                <motion.div className="copyright-container">
                    © All Rights Reserved, 2026
                </motion.div>
            </motion.div>
            <motion.div className="footer-right-side">
                <motion.div className="links-section pages">
                    <motion.h2>Pages</motion.h2>
                    <ul>
                        <li className={page === "Home" ? "active" : ""}><a href={"/"}>Home</a></li>
                        <li className={page === "Portfolio" ? "active" : ""}><a href={"/portfolio"}>Portfolio</a></li>
                        <li className={page === "Contact" ? "active" : ""}><a href={"/contact"}>Contact</a></li>
                    </ul>
                </motion.div>
                <motion.div className="links-section info">
                    <motion.h2>Info</motion.h2>
                    <ul>
                        <li className={page === "About" ? "active" : ""}><a href={"/about"}>About</a></li>
                    </ul>
                </motion.div>
                <motion.div className="links-section contact">
                    <motion.h2>Contact</motion.h2>
                    <ul>
                        <li>admin@silvyu.dev</li>
                        <li>silviupetrea60@gmail.com</li>
                        <li>(+40) 743 927 416</li>
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>
    </motion.div>
}