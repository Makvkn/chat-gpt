import {Configuration, OpenAIApi} from "openai";


const configuration = new Configuration({
    organization: "org-sPVqSVAGkQgsp05zXCBg3vSQ",
    apiKey: "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",
});


const openai = new OpenAIApi(configuration);

const request = async () => {
    const response = await openai.listEngines();
}



