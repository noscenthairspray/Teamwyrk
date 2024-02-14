const AcceptanceEmailTemplate = (requestData, target) => {
  const payDate = new Date();
  payDate.setDate(payDate.getDate() + 1 * 7);
  return `
    <td style="background: #F6F7FB; padding-bottom: 132px; max-width: 100%;">
    <div style="
    text-align: left;
      padding-top: 40px;
      padding-bottom: 46px;
  ">
    <h2
          style="
          color: var(--dark-blue-header, #222F65);
            font-family: Roboto;
            font-size: 19.96px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin: 0px 0px 0px 39px;
          "
        >
          TeamWyrk
        </h2>
        <p
          style="
          color: var(--dark-blue-header, #222F65);
            font-feature-settings: 'clig' off, 'liga' off;
            font-family: PT Sans;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 30px; /* 250% */
            margin: 0px 0px 0px 70px;
          "
          >built by Bootcamp2
      </p>
      </div>
    <table style="
      color: #f6f7fb;
      margin: auto;
      width: 450px;
      height: auto;
      border: 1px solid var(--Primary, #37447E);
      border-radius: 9px;
">
     <tr>
        <td style="
        color: #f6f7fb;
        width: 450px;
        height: 303px;
        margin: auto;
        background: #FFF;
      "><div style="margin: 40px">
        <h1
        style="
          color: var(--Primary, #37447e);
          font-size: 24px;
          font-weight: 700;
          line-height: 32px; /* 133.333% */
          margin-bottom: 20px;
          padding: 0;
        "
      >
        ${requestData.name} has accepted your help!
      </h1>
      <div
        style="
          font-feature-settings: 'clig' off, 'liga' off;
          font-size: 16px;
          font-weight: 400;
          line-height: 125%; /* 20px */
          color: #202124;
          margin-bottom: 20px;
          padding: 0;
        "
      >
        <p>Hi ${target},</p>
        <p>
        ${requestData.name} has accepted your help. You will need to schedule an offline meeting with ${requestData.name}. Please contact ${requestData.name} via email. You must complete the service by <b>${payDate}</b> for the payment to be processed.

        </p>
        <p style="color: #000; margin: 0; padding: 0">
          Best,<br />TeamWyrk
        </p>
      </div>
    </td>
     </tr>
     <tr>
        <td style="
        display: flex;
        align-items: center;
        flex-direction: column;
        flex-shrink: 0;
        margin-bottom: 4rem;
        width: 100%;">
            <div style="
            background-color: #FFF;
            color: #000;
            border: solid .1rem #bac3e5;
            border-radius: .9rem;
            box-shadow: 0 0.4rem 0.4rem rgba(0,0,0,0.25);
            box-sizing: border-box;
            flex-shrink: 0;
            /* height:9.8rem; */
            margin:0 3.2rem;
            overflow: hidden;
            padding: 2rem;
            position: relative;
            width:386px;
            ">
            <div style="display: flex;">
                <div style="background-image: url(${requestData.profile_image});
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            border-radius: 2.5rem;
            flex-shrink: 0;
            height:5rem;
            margin:.1rem,3rem,0rem,0rem;
            width:5rem"
            
            ></div>
            <span style="">
                Name: ${requestData.name}
                <br/>
                Service Requested: ${requestData.services}
                <br/>
                Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${requestData.email}" target="blank">${requestData.email}</a>
            </span>
        </div>
            </div>
        </td>
     </tr>
     <tr>
        <td style="
        text-align: center;
        background-color: #eff2fc;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 135.687%; /* 18.996px */
        letter-spacing: 0.04px;
        font-feature-settings: 'clig' off, 'liga' off;
        width: 450px;
        height: 60px;
        border-bottom-left-radius: 9px;
        border-bottom-right-radius: 9px;
      "><p style="background: var(--Blue-Fill, #eff2fc); color: #202124">
          Have a question?&nbsp;
          <a
            href="https://www.teamwyrk.org/support"
            style="color: #05f; text-decoration-line: underline"
            >Contact our support team</a
          ></td>
     </tr>
    </table>
  </div>
      `;
};

export default AcceptanceEmailTemplate;
