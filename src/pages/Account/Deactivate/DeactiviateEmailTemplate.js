const DeactivateEmailTemplate = (userName) => {
    return `<div style="background: #F6F7FB; padding-bottom: 132px">
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
        You just deactivated your account
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
        <p>Hi ${userName},</p>
        <p>
        You just deleted your TeamWyrk account.
        </p>
        <p style="color: #000; margin: 0; padding: 0">
          Best,<br /><br />TeamWyrk
        </p>
      </div></td>
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
  
  export default DeactivateEmailTemplate;
  