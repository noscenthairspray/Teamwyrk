import { Dialog, DialogActions, DialogContent } from "@mui/material";
import StyledButton from "../../../../../components/StyledButton";
import styles from "./GetMatchedModal.module.css";

const GetMatchedModal = ({
  open,
  setOpenModal,
  userContacts,
  handleSnackbarToggle,
}) => {
  const { name } = userContacts;
  console.log(userContacts);
  return (
    <>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={() => setOpenModal(false)}
        PaperProps={{
          sx: { borderRadius: "20px", maxWidth: 785, p: "40px" },
        }}
      >
        <DialogContent sx={{ width: 705 }}>
          <p className={styles.modalText}>
            By clicking continue, you are giving TeamWyrk the consent to email{" "}
            <span className={styles.textHighlight}>{`${name} `}</span>
            an automated message to continue the matching process. This request
            will be moved to your{" "}
            <span className={styles.textHighlight}>in-progress</span> tab.
          </p>
        </DialogContent>
        <DialogActions
          sx={{
            width: 705,
            gap: "25px",
          }}
        >
          <StyledButton color="secondary" onClick={() => setOpenModal(false)}>
            Cancel
          </StyledButton>
          <StyledButton
            color="primary"
            onClick={() => {
              handleSnackbarToggle();
              setOpenModal(false);
            }}
          >
            Continue
          </StyledButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default GetMatchedModal;
