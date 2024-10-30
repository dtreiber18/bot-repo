"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EchoBot = void 0;
const botbuilder_1 = require("botbuilder");
class EchoBot extends botbuilder_1.ActivityHandler {
    constructor() {
        super();
        this.onMessage((context, next) => __awaiter(this, void 0, void 0, function* () {
            // Echoes the user’s message
            yield context.sendActivity(`You said: ${context.activity.text}`);
            yield next();
        }));
        this.onMembersAdded((context, next) => __awaiter(this, void 0, void 0, function* () {
            const membersAdded = context.activity.membersAdded;
            const welcomeText = 'Hello and welcome!';
            if (membersAdded) {
                for (let member of membersAdded) {
                    if (member.id !== context.activity.recipient.id) {
                        yield context.sendActivity(welcomeText);
                    }
                }
            }
            yield next();
        }));
    }
}
exports.EchoBot = EchoBot;
