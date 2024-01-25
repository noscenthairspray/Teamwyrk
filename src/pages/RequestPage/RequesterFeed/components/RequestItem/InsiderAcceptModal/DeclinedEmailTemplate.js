const DeclinedEmailTemplate = (sender, target) => {
  return `
  <div style="background: #F6F7FB; padding-bottom: 132px">
    <div style="
    text-align: left;
      padding-top: 40px;
  ">
    <h2
          style="
          color: var(--dark-blue-header, #222F65);
            font-family: Roboto;
            font-size: 19.96px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin: 0px 0px 0px 39px;
          "
        >
          TeamWyrk
        </h2>
        <small
          style="
          color: var(--dark-blue-header, #222F65);
            font-feature-settings: 'clig' off, 'liga' off;
            font-family: PT Sans;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 30px; /* 250% */
            margin: 55px 0px 0px 70px;
          "
          >built by Bootcamp2
        </small>
      </div>
    <table style="
      color: #f6f7fb;
      margin: 46px auto 132px auto;
      width: 450px;
      height: auto;
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
        Looks like ${sender} no longer needs help with their request
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
        We would like to inform you that ${sender} appears to no longer need help with their <b>{TYPE OF HELP HERE}</b> request. Their request will be removed from your feed and we appreciate your offer to help.

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

export default DeclinedEmailTemplate;
