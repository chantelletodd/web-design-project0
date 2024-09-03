const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')

const user = {
    name: "Chantelle",
    email: "mvp22dpu@uea.ac.uk"
}

// initialize nodemailer
var transporter = nodemailer.createTransport(
    {
        service: 'uea',
        auth:{
            user: 'vvh22pmu@uea.ac.uk',
            pass: '######'
        }
    }
);

// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('.'),
        defaultLayout: false,
    },
    viewPath: path.resolve('.'),
};

// use a template file with nodemailer
transporter.use('compile', hbs(handlebarOptions))

if (user.email) {
    const mailOptions = {
        from: '"Our Global Company" <vvh22pmu@uea.ac.uk>', // sender address
        template: "email template", // the name of the template file, i.e., email.handlebars
        to: user.email,
        subject: `Thank you, ${user.name}!`,
        context: {
            name: user.name,
            company: 'newsletter'
        },
    };
    try {
        transporter.sendMail(mailOptions);
    } catch (error) {
        console.log(`Nodemailer error sending email to ${user.email}`, error);
    }
}

// This script was for sending an email to the user after they signed up to the newsletter
// The code was taken from a website so we could experiment with it before attempting a full implementation
// https://blog.logrocket.com/sending-emails-node-js-nodemailer
// We decided against its inclusion in the end because we opted to focus on other parts of the project instead