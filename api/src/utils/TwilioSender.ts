import { Twilio } from "twilio";



class TwilioSender {
  private client: Twilio;
  private twilioNumber: string;

  constructor() {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    this.twilioNumber = process.env.TWILIO_PHONE_NUMBER ?? '';

    this.client = new Twilio(accountSid, authToken);
  }

  public sendMessage(message: string, to: string) {
    this.client.messages.create({
      body: message,
      from: this.twilioNumber,
      to: `+55${to}`,
    }).then(message => console.log(message.sid));
  }
}

export default TwilioSender;