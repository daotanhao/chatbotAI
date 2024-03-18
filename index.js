const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const app = express();
const port = 3080;

const configuration = new Configuration({
  organization: "org-3dvOryph5xF19pRC30xtiYKo",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.post("/", async (req, res) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a text",
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0].text);
  res.json({
    data: response.data,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
