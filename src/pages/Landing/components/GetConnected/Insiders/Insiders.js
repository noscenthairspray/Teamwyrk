import styles from "./Insiders.module.css";

const Insiders = ( { insider, position}) => {

    const {name, description, image } = insider;

    return (
        <div className = {styles.container}>

            <div>
                <img src={image} alt="insiders"></img>
            </div>
            <div className = {styles.wrapperText}>
                <div className = {styles.name}>
                    <p>{name}</p>
                </div>
                <div className = {styles.description}>
                    <p>{description}</p>
                </div>  
            </div>
        </div>
    );
};

export default Insiders;