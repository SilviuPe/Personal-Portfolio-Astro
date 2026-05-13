import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/contact.css";

export default function ContactComponent() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        setResult("Sending...");

        const formData = new FormData(event.target);

        formData.append(
            "access_key",
            "f0fecada-d958-4d6d-b4f7-cc0ac6e8343d"
        );

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        if (data.success) {
            setResult("Message sent successfully!");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult("Something went wrong.");
        }
    };

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
            className="contact-container"
        >

            <motion.div className="contact-title-container">
                <h2>Let’s talk !</h2>
            </motion.div>

            <motion.div className="contact-description-container">
                <p>
                    Fill out the form below, and we'll respond soon!
                </p>
            </motion.div>

            <motion.form
                onSubmit={onSubmit}
                className="contact-form-container"
            >

                <motion.div className="contact-form-row">

                    <motion.div
                        className="input-content name-input contact-form-col"
                    >
                        <p>Your Name</p>

                        <input
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                    </motion.div>

                    <motion.div
                        className="input-content mail-input contact-form-col"
                    >
                        <p>Email Address</p>

                        <input
                            name="email"
                            type="email"
                            placeholder="yourmail@mail.com"
                            required
                        />
                    </motion.div>

                </motion.div>

                <motion.div className="contact-form-col">

                    <motion.div
                        className="input-content budget-input contact-form-col"
                    >
                        <p>Budget</p>

                        <input
                            name="budget"
                            placeholder="$600 - $1,000"
                        />
                    </motion.div>

                    <motion.div
                        className="input-content date-input contact-form-col"
                    >
                        <p>Preferred Date</p>

                        <input
                            name="date"
                            type="date"
                        />
                    </motion.div>

                    <motion.div
                        className="input-content message-input contact-form-col"
                    >
                        <p>Message</p>

                        <textarea
                            name="message"
                            placeholder="Describe your project..."
                            required
                        />
                    </motion.div>

                    <motion.div
                        className="submit-button-container contact-form-col"
                    >
                        <button type="submit">
                            Submit
                        </button>
                    </motion.div>

                    <motion.div
                        className="confidential-info-container contact-form-col"
                    >
                        <p>
                            Your information will remain confidential.
                        </p>

                        {result && (
                            <p className="form-result">
                                {result}
                            </p>
                        )}
                    </motion.div>

                </motion.div>

            </motion.form>

        </motion.div>
    );
}