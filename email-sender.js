import nodemailer from 'nodemailer';

// Créer un transporteur
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'votre-email@gmail.com', // Remplacez par votre adresse e-mail
    pass: 'votre-mot-de-passe'      // Remplacez par votre mot de passe
  }
});

// Définir les options de l'e-mail
let mailOptions = {
  from: 'votre-email@gmail.com',
  to: 'destination-email@example.com',
  subject: 'Test Email',
  text: 'Hello Node!'
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email envoyé : ' + info.response);
});
