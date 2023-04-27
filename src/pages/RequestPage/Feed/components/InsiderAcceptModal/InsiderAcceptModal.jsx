import React from "react"


const InsiderAcceptModal = () =>{
  
  return (
<>
     

  
    <div className="modal__container">
      <div className="modal">
        <div className="modal_header">
          <div className="modal_container_button">
            <button ><strong>X</strong></button>
            </div>
        <h3 className="header_title">
          <strong>An Insider has decided to take on your request!</strong>
        </h3>
      </div>
      <div className="modal_body" />
      <div className="actions">
        <button className="approve_button">Approve and Pay ↗</button>
        <button className="decline_button" >Decline</button>
      </div>
    </div>
    </div>
     
</>
  );
};

export default InsiderAcceptModal;