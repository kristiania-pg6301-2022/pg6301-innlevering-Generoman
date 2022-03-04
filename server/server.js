import express from "express";
import * as path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { checkAnswer, questions, retrieveRandomQuestion } from "./questions.js";
import {
  retrieveScoreFromCookie,
  updateScoreInCookie,
  scoreCookieMaker,
} from "./scoreCookie.js";
import * as Process from "process";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cookieParser(Process.env.COOKIE_SECRET));
app.use(scoreCookieMaker());

app.get("/api/score", (req, res) => {
  return res.json(retrieveScoreFromCookie(req));
});

app.get("/api/question", (req, res) => {
  const { id, question, answers } = retrieveRandomQuestion();
  return res.json({ id, question, answers });
});

app.post("/api/question", (req, res) => {
  const { id, answer } = req.body;
  const question = questions.find((q) => q.id === id);
  const score = retrieveScoreFromCookie(req);

  if (!question) {
    res.sendStatus(404);
  }

  if (checkAnswer(id, answer)) {
    score.correctlyAnswered++;
    score.answered++;
    updateScoreInCookie(res, score);
    res.json({ correct: "true" });
  } else {
    score.answered++;
    updateScoreInCookie(res, score);
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
