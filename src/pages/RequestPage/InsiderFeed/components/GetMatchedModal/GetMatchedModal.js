import { Dialog, DialogActions, DialogContent } from "@mui/material";
import StyledButton from "../../../../../components/StyledButton";
import styles from "./GetMatchedModal.module.css";
import { auth } from "../../../../../firebase";

const GetMatchedModal = ({
                             open,
                             setOpenModal,
                             userContacts,
                             handleSnackbarToggle,
                             addEmailToMailCollection
                         }) => {
    const { name } = userContacts;

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
                        ...
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
                        onClick={async () => {
                            handleSnackbarToggle();

                            if (userContacts && userContacts.name) {
                                const email = auth.currentUser.email;
                                const subject = "You've got a match!";
                                const text = `Hello, ${userContacts.name}! ${email} wants to get matched with you on TeamWyrk!`;

                                try {
                                    await addEmailToMailCollection(email, subject, text); // Here, I've changed userContacts.email to email because you're sending to the currently logged-in user
                                } catch (error) {
                                    console.error("Error sending email:", error);
                                }
                            } else {
                                console.error("User contact data might be incomplete.");
                            }
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
