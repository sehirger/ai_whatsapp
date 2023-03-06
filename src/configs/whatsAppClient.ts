const { Client, LocalAuth,  } = require("whatsapp-web.js");

// Whatsapp Client Auht for session
export const whatsAppClient = new Client({
     authStrategy: new LocalAuth(),
})