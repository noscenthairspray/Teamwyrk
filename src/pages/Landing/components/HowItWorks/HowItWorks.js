import { motion } from "framer-motion";
import styles from "./HowItWorks.module.css";
import { SubHeader } from "../../../../components/Typography";

//Framer-motion variants
const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  show: {
    transition: {
      delay: 0.2,
    },
  },
};
const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  show: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const HowItWorks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView={["visible", "show"]}
          className={styles.imgWrapper}
        >
          <img src={"/images/landing_page/how_it_works.png"} alt="HowItWorks" />
        </motion.div>

        <div className={styles.rightContainer}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.4,
            }}
          >
            <div className={styles.title}>
              <SubHeader color="darkBlue">How it works</SubHeader>
            </div>
            <motion.ol
              variants={listVariants}
              initial="hidden"
              whileInView={["visible", "show"]}
              className={styles.frames}
            >
              <motion.li variants={listItemVariants}>
                <div className={styles.ellipse}>
                  <div className={styles.number}> 1 </div>
                </div>
                Create a request.
              </motion.li>
              <motion.li variants={listItemVariants}>
                <div className={styles.ellipse}>
                  <div className={styles.number}> 2 </div>
                </div>
                Select a service.
              </motion.li>
              <motion.li variants={listItemVariants}>
                <div className={styles.ellipse}>
                  <div className={styles.number}> 3 </div>
                </div>
                Send this request and wait for an insider to accept.
              </motion.li>
              <motion.li variants={listItemVariants}>
                <div className={styles.ellipse}>
                  <div className={styles.number}> 4 </div>
                </div>
                Receive a confirmation when an insider accepts.
              </motion.li>
            </motion.ol>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
