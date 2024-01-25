const emailTemplate = (sender, target, month, day) => {
  return `
    <div style="font-family: PT Sans Bold 14pt, Arial, Helvetica, sans-serif; margin: 0; padding: 32px; background-color: #f6f7fb; color: #38447e;">
      <H1 style="margin: 4px 0;">Teamwyrk</H1>
      <p style="margin: 4px 40px;">built by Bootcamp2</p>
    </div>
    <div style="max-width: 550px; margin: 20px auto; background: #ffffff; border: 1px solid #000000; border-radius: 12px;">
      <div style="padding: 20px; text-align: center; color: #38447e;">
        <!-- Logo can be added here -->
        <h1>You've been matched to an Insider!</h1>
      </div>
      <div style="padding: 20px;">
        <p>Hi ${target},</p>
        <p>${sender} is interested in helping you with your <b>resume review</b> request. 
          Please <a href="https://www.teamwyrk.org/" style="color: blue;">navigate back to Teamwyrk</a> to accept your Insider's
          help by <b>${month}, ${day}.</b></p>
        <p>Best,</p>
        <p>Teamwyrk</p>
        <a href="https://www.teamwyrk.org/" style="display: block; width: max-content; margin: 20px auto; background-color: #38447e; color: #ffffff; text-decoration: none; border-radius: 9px; text-align: center; padding: 18px 24px;">Accept your Insider</a>
      </div>
      <div style="background-color: #EFF2FC; color: black; padding: 30px 20px; text-align: center; font-size: 0.8em; border-radius: 12px;">
        Have a question? <a href="https://www.teamwyrk.org/" style="color: blue;">Contact our support team.</a>
      </div>
    </div>
  `;
};

export default emailTemplate;
