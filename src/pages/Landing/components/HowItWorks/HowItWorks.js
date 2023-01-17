import styles from "./HowItWorks.module.css";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
        viewport={{ once: true }}
      >
        <img src={"/images/landing_page/HowItWorks.png"} alt="HowItWorks"></img>
      </motion.div>

      <div className={styles.rightContainer}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.4,
          }}
          viewport={{ once: true }}
        >
          <h2> How it works</h2>
          <div className={styles.textWrapper}>
            <motion.ol
              variants={textContainer}
              initial="hidden"
              animate="show"
              viewport={{ once: true }}
              className={styles.frames}
            >
              <motion.li variants={item} className={styles.frame1}>
                <div className={styles.ellipse}>
                  <div className={styles.number}> 1 </div>
                </div>
                Create a request.
              </motion.li>
              <motion.li variants={item} className={styles.frame2}>
                <div className={styles.ellipse}>
                  <div className={styles.number}> 2 </div>
                </div>
                Select a service.
              </motion.li>
              <motion.li variants={item} className={styles.frame3}>
                <div className={styles.ellipse}>
                  <div className={styles.number}> 3 </div>
                </div>
                Send this request and wait for an insider to accept.
              </motion.li>
              <motion.li variants={item} className={styles.frame4}>
                <div className={styles.ellipse}>
                  <div className={styles.number}> 4 </div>
                </div>
                Receives a confirmation when an insider accepts
              </motion.li>
            </motion.ol>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
