import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { fetchJSON } from "./fetchJSON";
import { useLoader } from "./useLoader";

function Question() {
  const { loading, error, data } = useLoader(
    async () => await fetchJSON("/api/question")
  );
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.toString()}</div>;

  const { id, question, answers } = data;

  async function submitAnswer(e) {
    e.preventDefault();

    const response = await fetch("/api/question", {
      method: "post",
      body: JSON.stringify({ id, answer }),
      headers: { "content-type": "application/json" },
    });
    const result = await response.json();
    if (result.correct === "true") {
      navigate("/correctAnswer");
    } else {
      navigate("/wrongAnswer");
    }
  }

  return (
    <>
      <form onSubmit={submitAnswer}>
        <h1>{question}</h1>
        {Object.keys(answers).map((a) => (
          <div key={a}>
            <label>
              <input
                type={"radio"}
                name={a}
                value={a}
                onChange={(e) => setAnswer(e.target.value)}
              />
              {answers[a]}
            </label>
          </div>
        ))}
        <br />
        <button>Sjekk svar</button>
      </form>
    </>
  );
}

function FrontPage() {
  return (
    <>
      <h1>Velkommen til Forkortelsesquizzen!</h1>
      <Link to={"/question"}>Svar på et spørsmål</Link>
    </>
  );
}

function CorrectAnswer() {
  return (
    <>
      <h1>Riktig svar!</h1>
      <ResultLinks />
    </>
  );
}

function WrongAnswer() {
  return (
    <>
      <h1>Feil svar!</h1>
      <ResultLinks />
    </>
  );
}

function ResultLinks() {
  return (
    <>
      <div>
        <Link to={"/question"}>Nytt spørsmål</Link>
      </div>
      <div>
        <Link to={"/"}>Tilbake til hovedsiden</Link>
      </div>
    </>
  );
}

function QuizApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/question"} element={<Question />} />
        <Route path={"/correctAnswer"} element={<CorrectAnswer />} />
        <Route path={"/wrongAnswer"} element={<WrongAnswer />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<QuizApp />, document.getElementById("app"));
