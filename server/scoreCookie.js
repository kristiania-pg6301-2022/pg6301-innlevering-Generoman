export function retrieveScoreFromCookie(req) {
  const { romanQuizScore } = req.signedCookies;
  if (romanQuizScore) {
    return romanQuizScore;
  }
  return { empty: "Nothing to see here" };
}

export function updateScoreInCookie(res, score) {
  res.cookie("romanQuizScore", score, {
    signed: true,
    overwrite: true,
  });
}

export function scoreCookieMaker() {
  return (req, res, next) => {
    if (req.signedCookies.romanQuizScore === undefined) {
      const score = { answered: 0, correctlyAnswered: 0 };
      res.cookie("romanQuizScore", score, { signed: true });
    }
    next();
  };
}
