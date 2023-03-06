import { openai } from "../configs/chatAPI";
import { prefixes, MACHINE_MODEL, MACHINE_USER } from "../configs/chatgptPrefix";

export const openAITextCraeteor = async (message: any) => {
  if (message.body.startsWith(prefixes[1])) {
    let prompt = message.body.replace(prefixes[1], "");
    const responseChat = await openai.createChatCompletion({
      model: MACHINE_MODEL,
      messages: [{ role: MACHINE_USER, content: prompt }],
    });
    return responseChat.data.choices[0].message;
  }
  return;
};
