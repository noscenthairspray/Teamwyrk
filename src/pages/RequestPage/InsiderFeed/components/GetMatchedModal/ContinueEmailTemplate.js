const emailTemplate = (sender, target) => {
  return `
  
    <div style="font-family: Arial, sans-serif; color: #333;">
      <div style="text-align: center; margin-bottom: 30px; color: #333;">
        <h2>TeamWyrk</h2>
        <small>built by Bootcamp2</small>
      </div>
      <div style="background-color: #f9f9f9; padding: 20px;">
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
           style="background-color: #4C9AFF; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
          Accept your Insider
        </a>
      </div>
      <div style="text-align: center; margin-top: 30px;">
        <p>Have a question? <a href="https://www.teamwyrk.org/support" style="color: #4C9AFF;">Contact our support team</a>.</p>
      </div>
    </div>
  `;
  };
  
  export default emailTemplate;