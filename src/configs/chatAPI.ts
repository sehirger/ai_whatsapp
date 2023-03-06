const process = require("process");
// Environment variables
require("dotenv").config();

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.apiKey,
});

//  export OpenAP
export const openai = new OpenAIApi(configuration);
