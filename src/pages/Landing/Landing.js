import { HowItWorks, GetConnected } from "./components";
import styles from "./Landing.module.css";
import CTA from "../../components/CTA";

const Landing = () => {
    return (
        <div>
            < GetConnected />
            < CTA buttonText="Join the waitlist" />
        </div>
    );
};

export default Landing;