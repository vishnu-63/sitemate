// src/mailer/mailer.service.ts
/* eslint-disable @typescript-eslint/no-require-imports */
const nodemailer = require('nodemailer');
import { google } from 'googleapis';
const CLIENT_ID=process.env.CLIENT_ID
const CLIENT_SECRET=process.env.CLIENT_SECRET
const REDIRECT_URI=process.env.REDIRECT_URI
const REFRESH_TOKEN=process.env.REFRESH_TOKEN
const oauth2Client=new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
oauth2Client.setCredentials({refresh_token:REFRESH_TOKEN})
const accessToken=oauth2Client.getAccessToken()
export const transport=nodemailer.createTransport({
    service:'gmail',
      auth:{
        type:"oauth2",
        user:"chakkavishnu63@gmail.com",
        clientId:CLIENT_ID,
        clientSecret:CLIENT_SECRET,
        refreshToken:REFRESH_TOKEN,
        accessToken:accessToken

      }
})
export const sendMail = async (to: string, subject: string, text: string) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: to,
    subject: subject,
    text: text,
  };

  try {
    const result = await transport.sendMail(mailOptions);
    console.log('Email sent:', result);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};
