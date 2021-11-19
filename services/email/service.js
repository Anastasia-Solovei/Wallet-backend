const Mailgen = require('mailgen');

class mailService {
  constructor(env, sender) {
    this.sender = sender;
    switch (env) {
      case 'development':
        this.link = 'https://goit-react-hw-08-phonebook-av-solovei.netlify.app';
        break;

      case 'production':
        this.link = 'https://goit-react-hw-08-phonebook-av-solovei.netlify.app';
        break;

      default:
        this.link = 'http://localhost:3000';
        break;
    }
  }

  createTemplateEmail(name, emailVerificationToken) {
    const mailGenerator = new Mailgen({
      theme: 'default',
      product: {
        name: 'iTeamChic command',
        link: this.link,
        // logo: 'https://mailgen.js/img/logo.png'
      },
    });

    const email = {
      body: {
        name,
        intro: `You're almost ready to start enjoying Wallet application.`,
        action: {
          instructions:
            'To get started with Wallet, simply click the big button below. We just need to verify your email address.',
          button: {
            color: '#24cca7',
            text: 'Confirm your account',
            link: `${this.link}/users/verify/${emailVerificationToken}`,
          },
        },
        outro:
          "Need help, or have questions? Just reply to this email, we'd love to help.",
      },
    };

    return mailGenerator.generate(email);
  }

  async sendVerificationEmail(email, name, emailVerificationToken) {
    const emailHTML = this.createTemplateEmail(name, emailVerificationToken);
    const msg = {
      to: email,
      subject: 'Verify your email',
      html: emailHTML,
    };
    try {
      const result = await this.sender.send(msg);
    } catch (err) {
      console.log(err.message);
      return false;
    }
  }
}

module.exports = mailService;
