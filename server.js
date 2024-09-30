const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5001, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

// const contactEmail = nodemailer.createTransport({
//   service: '',
//   auth: {
//     user: "****",
//     pass: "****"
//   },
// });

const contactEmail = nodemailer.createTransport({
    host: "smtpout.secureserver.net", // GoDaddy's SMTP server
    port: 465, // Secure port for SMTP
    secure: true, // True for 465, false for 587
    auth: {
      user: "admin@haspper.com", // Your GoDaddy email (e.g., "yourname@domain.com")
      pass: "1404@helmetpurifier", // Your GoDaddy email password
    },
  });

  contactEmail.verify((error) => {
    if (error) {
      console.log("Error setting up email service: ", error);
    } else {
      console.log("Email service is ready to send messages");
    }
  });   

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "admin@haspper.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});