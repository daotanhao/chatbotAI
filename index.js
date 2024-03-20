import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3080;
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  organization: "",
  apiKey: "",
});
const openai = new OpenAIApi(configuration);

app.post("/", async (req, res) => {
  const { message } = req.body;
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `${message}` }],
    max_tokens: 100,
    temperature: 0.5,
  });

  res.json({
    completion: completion.data.choices[0].message,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
