import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className = {styles.container}>
            <div className = {styles.upperContainer}>
                <img src = {"images/landing_page/linkedin.svg"} alt = "linkedin"></img>
            </div>

            <div className = {styles.lowerContainer}>
                <div className = {styles.textWrapper}>
                    <b className = {styles.website}> team@teamwryk.com </b>
                    <b className = {styles.copyright}> © 2022 TeamWyrk. All rights reserved.</b>
                </div>
            </div>
        </footer>
    );
};

export default Footer;