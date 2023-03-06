# OpenAI , StabilityAI with WhatsAPP



## Hello World From ChatGPT



![Hello World From ChatGPT](./src/readme/Hello%20World%20From%20ChatGPT.png)



## Hello World Form OprnAI ImageCreator

![Hello World Form OprnAI ImageCreator](./src//readme/Hello%20World%20Form%20OprnAI%20ImageCreator.png)



## Hello Wolrd Form StabilityAI

![Hello Wolrd Form StabilityAI](./src/readme/%5BHello%20Wolrd%20Form%20StabilityAI.png)



## 1.0.0

[Detail](https://github.com/sehirger/ai_whatsapp)

#### Future

- Personalized prefixes 個性化前綴 .
- Response Text Only Reply 純文本應答.
- Graphic Responses 圖文應答



## First Steps 初步步驟  باشلاش



1. git from GitHub 拉取資源並初始化NodeJS دەسلەپكى باسقۇچلۇق تەييارلىق

```shell
$ git clone https://github.com/sehirger/ai_whatsapp.git
$ cd ai_whatsapp
$ npm install
```

2. Set up ApiKey 配置ApiKey تەييارلاش

```shell
$ cp .env.example .env
    $ vi .env

		Or open the root directory of the project and copy an .env.example file from the root 			directory to the .env file (remove the .example at the end) then configure the ApiKey 
    或者打開項目根目錄,複製一份根目錄下的 .env.example 文件到.env文件(把後面的.example去掉)
    然後配置相關的api的ApiKey
    
    ياكى ھۆججەت خالتىسىنىڭ ئىچىدىكى
       ھۆججىتىنى كۆپەيتىپ.env.example
			 نى بىكىتىڭApiKey غا ئاندىن  مۇناسىۋەتلىك.env 
    e.g 
        # OpennAI credentials
        apiKey=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        # StabilitiAI API key
        stabilityApiKey=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxu
```





3. Start Project 開始使用 ئىسلىتىش

```shell
$ npm start
```



4. Set up prefix 前綴配置   سەپلەش prefix

```shell
$ vi src/configs/chatgptPrefix.ts

// content prefix
export const APP_NAME = "[ᴛʀɪᴀɴɢʟᴇ⟁ᴛᴇᴄʜ]";
// call the openAI
export const prefixes = ["$$", "..", "/ss" ];
// set your phone number With regional numbers
export const ADMIN = ["XXXXXXXXXXX"];
// the mashine Model
export const MACHINE_MODEL = "gpt-3.5-turbo";
// the mashine User
export const MACHINE_USER = "system";
// form message
export const MACHINE_NAME = "\n from OpenAI";
// Generated images can have a size of 256x256, 512x512, or 1024x1024
export const MACHINE_IMAGE_SIZE = "1024x1024";
```

