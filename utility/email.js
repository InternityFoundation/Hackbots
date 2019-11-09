const nodemailer = require("nodemailer");
const pug=require("pug");
const htmlToText=require("html-to-text");

//new Email(user,url).sendWelcome();
//new Email(user,url).sendReset();

module.exports= class Email{
  constructor(user,url){
    this.name=user.Name;
    this.url=url;
    this.to=user.email;
    this.from="Mansi Jain <mansijain2405@gmail.com>"
  }
  newNodemailer(){
    return nodemailer.createTransport({
      service:"sendgrid",
      host: "smtp.sendgrid.net",
      //port: 2525,
      auth: {
        user: "apikey",
        pass: "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"
      }
    });
  }
  async send(template,subject){
   //1. Render pug Templates
   var html=pug.renderFile(`${__dirname}/../template/${template}.pug`,{
     name:this.name,
     url:this.url
   });
   //2.define email options
    let EmailOptions={
      from: this.from, // sender address
      to: this.to, // list of receivers
      subject: subject, // Subject line
      html:html,
      text: htmlToText.fromString(html)
    };
    console.log('kfsofsjl')
    await this.newNodemailer().sendMail(EmailOptions);
  }
  sendWelcome(){
    this.send("Welcome","Welcome to origami family.");
  }
  sendReset(){
    this.send("password","Password has to be changed.");
  }
}

// module.exports= async function sendEmail(options)  {
  
//   // 1. create transporter 
//   var transporter = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "6f871310bc9940",
//       pass: "525cc792679ab1"
//     }
//   });
//   // define email options
//   let EmailOptions={
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: options.recieverId, // list of receivers
//     subject: options.subject, // Subject line
//     text: options.message
//   }
//   // send email
//   await transporter.sendMail(EmailOptions);
// };
