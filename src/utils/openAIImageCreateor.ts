import { openai } from "../configs/chatAPI";
import { prefixes,MACHINE_IMAGE_SIZE } from "../configs/chatgptPrefix";

export const openAIImageCreateor = async (message: any) => {
  if (message.body.startsWith(prefixes[0])) {
    let prompt = message.body.replace(prefixes[0], "");

    const responseChat = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: prompt }],
    });
    const responseImage = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: MACHINE_IMAGE_SIZE,
    });

    return { image: responseImage.data.data[0].url, text: responseChat };
  }
  return;
};
