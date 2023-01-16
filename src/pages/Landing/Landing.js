import { HowItWorks, GetConnected, CardItem, HeroItem } from "./components";
import styles from "./Landing.module.css";
import CTA from "../../components/CTA";

const Landing = () => {
    return (
        <div>
            < HeroItem />
            < CardItem />
            < HowItWorks />
            < GetConnected />
            < CTA buttonText="Join the waitlist" />
        </div>
    );
};

export default Landing;