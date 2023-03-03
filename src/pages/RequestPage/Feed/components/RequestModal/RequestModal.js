import { Dialog, DialogActions, DialogContent } from "@mui/material";
import Button from "../../../../../components/Button";
import styles from "./RequestModal.module.css";

const RequestModal = ({ open, setOpenModal, contacts }) => {
  const { name, email } = contacts;
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
            By clicking continue, you agree to email{" "}
            <span className={styles.requesterName}>{name}</span> at{" "}
            <a href={`mailto:${email}`}>{email}</a> to continue the process off
            the platform. Please email TeamWyrk at{" "}
            <a href="mailto:team@teamwyrk.com">team@teamwyrk.com </a> once you
            have completed the request.
          </p>
          <p className={styles.exampleText}>
            Ex. “Hi! I saw your request on TeamWyrk and I can help you with a
            resume review for $20.”
          </p>
        </DialogContent>
        <DialogActions
          sx={{
            width: 705,
          }}
        >
          <Button
            color="secondary"
            type="default"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            type="default"
            onClick={() => {
              window.location.href = `mailto:${email}`;
              setOpenModal(false);
            }}
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RequestModal;
