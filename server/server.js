import express from "express";
import * as path from "path";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { questions, retrieveRandomQuestion, checkAnswer } from "./questions.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.get("/api/question", (req, res) => {
  const { id, question, answers } = retrieveRandomQuestion();

  return res.json({ id, question, answers });
});

app.post("/api/question", (req, res) => {
  const { id, answer } = req.body;
  const question = questions.find((q) => q.id === id);

  if (!question) {
    res.sendStatus(404);
  }

  if (checkAnswer(id, answer)) {
    res.json({ correct: "true" });
  } else {
    res.json({ correct: "false" });
  }
});

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api/")) {
    return res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Express server running at http://localhost:${server.address().port}`
  );
});
