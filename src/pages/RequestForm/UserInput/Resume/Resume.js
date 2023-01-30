import styles from "./Resume.module.css";
import Button from "../../../../components/Button";

//Upload your resume text and Attach File Button
//You can use the primary button from src/components to save time

//button props are variant, type, onClick
const Resume = () => {

  const clickHandler = () => {

  }
  return (
    <>
      <p>Upload your resume*</p>
      <Button type="hover"
        variant="primary"
        onClick={clickHandler}>
        Attach a file
      </Button> * Attachment size limitation
    </>
  )
};

export default Resume;
