import { useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StyledButton from "../../../../components/StyledButton";
import { Header } from "../../../../components/Typography";
import styles from "./HeroItem.module.css";

const HeroItem = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className={styles.container}>
      {/* add properties to motion.divs to animate */}
      {/* heroLeft logo container */}
      <motion.div
        className={styles.heroLeft}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          ease: "easeIn",
        }}
      >
        <img
          className={styles.heroLeftLogo}
          src="/images/landing_page/herosectionleft.png"
          alt="hero logo left"
        />
      </motion.div>

      {/* center text container */}
      <div className={styles.heroCenterText}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.1,
            ease: "backIn",
          }}
        >
          <Header color="primary">
            It takes a team to <br /> find work.
          </Header>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            ease: "backIn",
          }}
        >
          {isMd ? (
            <>
              <p className={styles.textBodyTop}>
                Our app connects users with insiders at tech companies.
              </p>
            </>
          ) : (
            <>
              <p className={styles.textBodyTop}>
                We’ll be your team, connecting you with insiders at top <br />
                companies to land your next role at no extra cost.
              </p>
            </>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.45,
            ease: "backIn",
          }}
        >
          <a href="https://teamwyrk.framer.website/">
            <StyledButton color="#37447e" hover>
              Volunteer
            </StyledButton>
          </a>
        </motion.div>
      </div>

      {/* heroRight logo container */}
      <motion.div
        className={styles.heroRight}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          ease: "easeIn",
        }}
      >
        <img
          className={styles.heroRightLogo}
          src="/images/landing_page/herosectionright.png"
          alt="hero logo right"
        />
      </motion.div>
    </div>
  );
};

export default HeroItem;
