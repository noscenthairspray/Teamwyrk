const DeclinedEmailTemplate = (sender, target) => {
  return `
  <div style="color: #f6f7fb">
  <div style="text-align: center; margin-bottom: 30px; color: #eff2fc">
    <h2 style="color: #37447e; font-family: Roboto">TeamWyrk</h2>
    <small style="color: #37447e; font-family: PT Sans"
      >built by Bootcamp2</small
    >
  </div>
  <div
    style="background-color: #f9f9f9; padding: 20px; font-family: PT Sans"
  >
    <h1 style="color: #37447e">You have been declined</h1>
    <p style="color: #202124">Hi ${target},</p>
    <p style="color: #202124">
      You are receiving this email to inform you that ${sender} has declined
      your help. The request will be removed from your feed.
    </p>
    <p style="#000">Best,<br />TeamWyrk</p>
  </div>
  <div
    style="
      text-align: center;
      margin-top: 30px;
      background-color: #eff2fc;
      font-family: Roboto;
    "
  >
    <p style="color: #202124">
      Have a question?
      <a href="https://www.teamwyrk.org/support" style="color: #05f"
        >Contact our support team</a
      >.
    </p>
  </div>
</div>
    `;
};

export default DeclinedEmailTemplate;
