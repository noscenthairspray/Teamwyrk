const emailTemplate = (sender, target) => {
  return `
    <div style="font-family: PT Sans Bold 14pt, sans-serif; color: #333;">
      <div style="text-align: left; margin-bottom: 30px; padding: 23px 24px; color: #37447e; background-color: #eff2fc;">
        <h2 style="display: inline;">TeamWyrk</h2>
        <small style="display: inline;">built by Bootcamp2</small>
      </div>
      <div style="padding: 20px;">
        <h1>${sender} has decided to help you!</h1>
        <p>Hi ${target},</p>
        <p>${sender} is interested in helping you fulfill your request.
          Please navigate back to Teamwyrk to view ${sender} information and
          <strong>make a decision</strong>.
        </p>
        <p>Best,<br>TeamWyrk</p>
      </div>
      <div style="text-align: center; margin-top: 20px;">
        <a href="https://www.teamwyrk.org/accept-insider" 
          style="background-color: #37447e; color: #ffffff; padding: 23px 24px; text-decoration: none; border-radius: 9px; display: inline-block;">
          Accept your Insider
        </a>
      </div>
      <div style="text-align: center; margin-top: 30px; padding: 34px 30px; background-color: #eff2fc;">
        <p>Have a question? <a href="https://www.teamwyrk.org/support" style="color: #4C9AFF;">Contact our support team</a>.</p>
      </div>
    </div> 
  `;
};

export default emailTemplate;