import { Message, MessageMedia } from "whatsapp-web.js";
import { whatsAppClient as Client } from "../configs/whatsAppClient";
import Logger from "./logger";
import { APP_NAME, MACHINE_NAME, ADMIN } from "../configs/chatgptPrefix";
import { prefixes } from "../configs/chatgptPrefix";

// openAI tools
import { openAITextCraeteor } from "../utils/openAITextCreateor";
import { openAIImageCreateor } from "../utils/openAIImageCreateor";

// StabilityAI
import { stabilityImageCreator } from "../utils/stabilityImageCreator";

export const handler = async (message: Message, p: any) => {
  try {
    let response: any;
    if (message.body.startsWith(prefixes[1])) {
      response = await openAITextCraeteor(message);
      message.reply(APP_NAME + ": " + response.content);
    }
    if (message.body.startsWith(prefixes[0])) {
      response = await openAIImageCreateor(message);
      const media = await MessageMedia.fromUrl(response.image);
      let isAdmin = ADMIN + "@c.us";
      Client.sendMessage(
        message.from == isAdmin ? message.to : message.from,
        media,
        {
          caption:
            APP_NAME + ": " + response.text.data.choices[0].message.content,
        }
      );
    }

    if (message.body.startsWith(prefixes[2])) {
      console.log("/ss running");
      let isAdmin = ADMIN + "@c.us";
      const prompts = [
        {
          text: message.body.replace(prefixes[2], ""),
        },
      ];
      let reData = await stabilityImageCreator(prompts);

      const sMedia = new MessageMedia("image/png", reData.image);

      Client.sendMessage(
        message.from == isAdmin ? message.to : message.from,
        sMedia,
        {
          caption: APP_NAME + ": " + prompts[0].text,
        }
      );
    }
    return;
  } catch (error: any) {
    Logger.error(`Failed to send message to ChatGPT API: ` + error);
    return message.reply(
      APP_NAME +
        ": " +
        "I'm sorry, I'm not available at the moment to reply. Please try again after sometime."
    );
  }
};
