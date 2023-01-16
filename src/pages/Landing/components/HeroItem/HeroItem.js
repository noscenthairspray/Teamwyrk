import { motion } from "framer-motion";
import styles from "./HeroItem.module.css";
//create components for images to import here

const HeroItem = () => {
    return (
        <div className={styles.container}>
            {/* add properties to motion.divs to animate */}
            {/* heroLeft logo container */}
            <motion.div className={styles.heroLeft}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 1,
                    ease: "easeIn",
                }}>
                <img
                    className={styles.heroLeftLogo}
                    src="/images/landing_page/herosectionleft.png"
                    alt="hero logo left"
                />
            </motion.div>

            {/* center text container */}
            <div className={styles.heroCenterText}>
                {/* add class name to this h1 tag for consistent styling */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: .10,
                        ease: "backIn"
                    }}>
                    <h1>Get ready for TeamWyrk.</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: .30,
                        ease: "backIn"
                    }}>
                    <p className={styles.textBodyTop}>
                        It takes a team to find work. We'll be your team, <br /> connecting
                        you with insiders at top companies to land <br />
                        your next role at no extra cost. <br />
                    </p>
                    <p className={styles.textBodyBottom}>
                        Join the waitlist to be among the first to know when <br />
                        TeamWyrk launches.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.45,
                        ease: "backIn"
                    }} >
                    <button className={styles.waitListBtn}>Join the waitlist</button>
                </motion.div>
            </div>

            {/* heroRight logo container */}
            <motion.div className={styles.heroRight} initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 1,
                    ease: "easeIn"
                }} >
                <img
                    className={styles.heroRightLogo}
                    src="/images/landing_page/herosectionright.png"
                    alt="hero logo right"
                />
            </motion.div>
        </div >
    );
};

export default HeroItem;