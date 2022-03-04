export function retrieveRandomQuestion() {
  return questions[Math.floor(Math.random() * questions.length)];
}

export function checkAnswer(id, answer) {
  const question = questions.find((q) => q.id === id);

  return question.correct_answers[answer] === "true";
}

export const questions = [
  {
    id: 0,
    question: "Hva står LOL for?",
    answers: {
      answer_a: "Lots of love",
      answer_b: "Laughing out loud",
      answer_c: "Love of life",
      answer_d: "Link other locales",
    },
    correct_answers: {
      answer_a: "false",
      answer_b: "true",
      answer_c: "false",
      answer_d: "false",
    },
  },
  {
    id: 1,
    question: "Hva står BRB for?",
    answers: {
      answer_a: "Bring root beer",
      answer_b: "Boot right brain",
      answer_c: "Back-rubbing bastard",
      answer_d: "Be right back",
    },
    correct_answers: {
      answer_a: "false",
      answer_b: "false",
      answer_c: "false",
      answer_d: "true",
    },
  },
  {
    id: 2,
    question: "Hva står ASAP for?",
    answers: {
      answer_a: "As soon as possible",
      answer_b: "Any sets at practice",
      answer_c: "All sent as provided",
      answer_d: "Aggression shall annihilate peace",
    },
    correct_answers: {
      answer_a: "true",
      answer_b: "false",
      answer_c: "false",
      answer_d: "false",
    },
  },
  {
    id: 3,
    question: "Hva står IANAL for?",
    answers: {
      answer_a: "I am not a lawyer",
      answer_b: "Ikke en forkortelse, men noe fullstendig upassende",
      answer_c: "I ain't no asslicker",
      answer_d: "Indirect attack; notifying all locations",
    },
    correct_answers: {
      answer_a: "true",
      answer_b: "false",
      answer_c: "false",
      answer_d: "false",
    },
  },
  {
    id: 4,
    question: "Hva står ASL for?",
    answers: {
      answer_a: "American singer's lounge",
      answer_b: "Ate, slept, loved",
      answer_c: "Age/sex/location",
      answer_d: "Anticipating slow loris",
    },
    correct_answers: {
      answer_a: "false",
      answer_b: "false",
      answer_c: "true",
      answer_d: "false",
    },
  },
  {
    id: 5,
    question: "Hva står AFK for?",
    answers: {
      answer_a: "Away from keyboard",
      answer_b: "All-frickin'-knowing",
      answer_c: "Android functional keyboard",
      answer_d: "Any fault known",
    },
    correct_answers: {
      answer_a: "true",
      answer_b: "false",
      answer_c: "false",
      answer_d: "false",
    },
  },
  {
    id: 6,
    question: "Hva står PEBKAC for?",
    answers: {
      answer_a: "Pascal error: boot kernel adaptation crash",
      answer_b: "Problematic export branch. Kill authentication check?",
      answer_c: "Pending entry blocked; known antecedent cause:",
      answer_d: "Problem exists between keyboard and chair",
    },
    correct_answers: {
      answer_a: "false",
      answer_b: "false",
      answer_c: "false",
      answer_d: "true",
    },
  },
  {
    id: 7,
    question: "Hva står ROFL for?",
    answers: {
      answer_a: "Rolling on fallen leaves",
      answer_b: "Rolling on the floor laughing",
      answer_c: "Right on, Freddy Long",
      answer_d: "Risk of frickin' life",
    },
    correct_answers: {
      answer_a: "false",
      answer_b: "true",
      answer_c: "false",
      answer_d: "false",
    },
  },
  {
    id: 8,
    question: "Hva står LMAO for?",
    answers: {
      answer_a: "Life may always object",
      answer_b: "Link/move/append-operation",
      answer_c: "Lightweight machine authorized operator",
      answer_d: "Laughing my ass off",
    },
    correct_answers: {
      answer_a: "false",
      answer_b: "false",
      answer_c: "false",
      answer_d: "true",
    },
  },
  {
    id: 9,
    question: "Hva står IRL for?",
    answers: {
      answer_a: "Indirect router link",
      answer_b: "Infrared laser",
      answer_c: "In real life",
      answer_d: "Inter-relational loss",
    },
    correct_answers: {
      answer_a: "false",
      answer_b: "false",
      answer_c: "true",
      answer_d: "false",
    },
  },
];
