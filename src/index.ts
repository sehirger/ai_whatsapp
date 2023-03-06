const qrcode = require("qrcode-terminal");
import Logger from "./utils/logger";
import { handler as handleMessage } from "./utils/message";
import { whatsAppClient as Client } from "./configs/whatsAppClient";

const start = async () => {
  try {
    Client.on("qr", (qr) => {
      qrcode.generate(qr, { small: true });
    });
    Client.on("ready", async (message) => {
      console.log("Client is ready!");
    });
    Client.on("message_create", async (message: any) => {
      console.log("can send message!");
      if (message.body.length == 0) return;
      await handleMessage(message, message.body);
    });
    Client.initialize();
  } catch (error: any) {
    Logger.error(`Failed to initialize the Client: ${error.message}`);
    start();
  }
};
start();
