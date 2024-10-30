import { ActivityHandler, TurnContext } from 'botbuilder';

export class EchoBot extends ActivityHandler {
  constructor() {
    super();
    this.onMessage(async (context: TurnContext, next) => {
      // Echoes the user’s message
      await context.sendActivity(`You said: ${context.activity.text}`);
      await next();
    });

    this.onMembersAdded(async (context: TurnContext, next) => {
      const membersAdded = context.activity.membersAdded;
      const welcomeText = 'Hello and welcome!';
      if (membersAdded) {
        for (let member of membersAdded) {
          if (member.id !== context.activity.recipient.id) {
            await context.sendActivity(welcomeText);
          }
        }
      }
      await next();
    });
  }
}
