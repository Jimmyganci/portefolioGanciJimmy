const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 8000;

app.use(express.json());

const corsOptions = {
  origin: true,
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.post("/send", (req, res) => {
  const { firstname, lastname, email, subject, text } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jimmy.ganci@gmail.com",
      pass: process.env.PWD_GMAIL,
    },
  });

  const mailOptions = {
    from: "myPortefolio",
    to: "jimmy.ganci@gmail.com",
    subject: subject,
    text: `Vous avez reçu un mail de: ${email}!
	Prénom:${firstname}
	Nom:${lastname}
	Sujet:${subject}
	Message: ${text}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
