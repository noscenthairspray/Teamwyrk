const emailTemplate = (sender, target, month, day) => {
  return `
  <style>
  body {
    font-family: PT Sans Bold 14pt;
    margin: 0;
    padding: 32px;
    background-color: #f6f7fb;
  }
  .email-container {
    max-width: 550px;
    margin: 20px auto;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 12px;
  }
  .email-header {
    padding: 20px;
    text-align: center;
    color: #38447e;
  }
  .email-content {
    padding: 20px;
  }
  .button {
    display: block;
    width: max-content;
    margin: 20px auto;
    background-color: #38447e;
    color: #ffffff;
    text-decoration: none;
    border-radius: 9px;
    text-align: center;
    color: #ffffff; 
    padding: 18px 24px; 
  }
  .footer {
    background-color: #EFF2FC;
    color: black;
    padding: 30px 20px;
    text-align: center;
    font-size: 0.8em;
    border-radius: 12px;
  }
  .container-link{
    color: blue;
  }
</style>
</head>
<body>
  <div style="color: #38447e;">
    <H1 style="margin: 4px 0;">Teamwyrk</H1>
    <p style="margin: 4px 40px;">built by Bootcamp2</p>
  </div>
<div class="email-container">
  <div class="email-header">
    <!-- Logo can be added here -->
    <h1>You've been matched to an Insider!</h1>
  </div>
  <div class="email-content">
    <p>Hi ${target},</p>
    <p>${sender} is interested in helping you with your <b>resume review</b> request. 
      Please <a class="container-link" href="">navigate back to Teamwyrk</a> to accept your Insider's
       help by <b>${month}, ${day}.</b></p>
    <p>Best,</p>
    <p>Teamwyrk</p>
    <a href="https://www.teamwyrk.org/" class="button">Accept your Insider</a>
  </div>
  <div class="footer">
    Have a question? <a href="https://www.teamwyrk.org/support">Contact our support team.</a>
  </div>
</div>
</body>
  `;
};

export default emailTemplate;