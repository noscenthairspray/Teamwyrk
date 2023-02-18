import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./HowItWorks.module.css";

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

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.wrapper}>
        {isInView && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className={styles.imgWrapper}
            >
              <img
                src={"/images/landing_page/how_it_works.png"}
                alt="HowItWorks"
              />
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
                <h2 className={styles.title}> How it works</h2>
                <motion.ol
                  variants={textContainer}
                  initial="hidden"
                  animate="show"
                  viewport={{ once: true }}
                  className={styles.frames}
                >
                  <motion.li variants={item}>
                    <div className={styles.ellipse}>
                      <div className={styles.number}> 1 </div>
                    </div>
                    Create a request.
                  </motion.li>
                  <motion.li variants={item}>
                    <div className={styles.ellipse}>
                      <div className={styles.number}> 2 </div>
                    </div>
                    Select a service.
                  </motion.li>
                  <motion.li variants={item}>
                    <div className={styles.ellipse}>
                      <div className={styles.number}> 3 </div>
                    </div>
                    Send this request and wait for an insider to accept.
                  </motion.li>
                  <motion.li variants={item}>
                    <div className={styles.ellipse}>
                      <div className={styles.number}> 4 </div>
                    </div>
                    Receives a confirmation when an insider accepts
                  </motion.li>
                </motion.ol>
              </motion.div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HowItWorks;
